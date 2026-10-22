# -*- coding: utf-8 -*-
"""
Парсер цен: Магнит + Перекрёсток.

Запуск:
  python3 parse_prices.py
  python3 parse_prices.py --magnit
  python3 parse_prices.py --perekrestok

Прокси для Перекрёстка (обход 403):
  python3 parse_prices.py --perekrestok --proxy http://user:pass@host:port
  python3 parse_prices.py --perekrestok --proxy socks5://127.0.0.1:1080

  # или через окружение:
  export PEREKRESTOK_PROXY=http://user:pass@host:port
  export HTTPS_PROXY=http://user:pass@host:port   # общий, тоже подхватится

Cookies (если прокси мало):
  export PEREKRESTOK_COOKIE='session=...; accessToken=...'

Пишет:
  magnit_prices_raw.json
  perekrestok_prices_raw.json
  prices_live.json

Для телефона / Telegram Mini App:
  1) Этот скрипт на ПК или сервере (cron раз в 6–12 ч).
  2) HTML (racion.html) лежит рядом с prices_live.json на том же хостинге.
  3) Приложение при загрузке меню само делает fetch('./prices_live.json')
     и обновляет LIVE_PRICES (кэш в localStorage на 12 часов).

Почему не Самокат/Vprok прямо из браузера:
  у них нет публичного CORS API, нужен серверный парсер (этот скрипт
  или отдельный воркер). Магнит и Перекрёсток (Vprok) — основные источники
  в prices_live.json; Самокат можно добавить аналогичным блоком при наличии
  рабочего endpoint/прокси.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime
from typing import Any, Optional

# ─── общие продукты ───────────────────────────────────────────
PRODUCTS = {
    "chicken_breast": ("куриная грудка филе", ["грудк", "филе"], "kg", 1),
    "turkey": ("филе индейки", ["индейк"], "kg", 1),
    "beef": ("говядина", ["говядин"], "kg", 1),
    "fish_white": ("филе минтая", ["минтай"], "kg", 1),
    "salmon": ("горбуша стейк", ["горбуш", "лосос"], "kg", 1),
    "eggs": ("яйцо куриное C1 10", ["яйц"], "pack10", 1),
    "cottage": ("творог 5%", ["творог"], "kg", 0.18),
    "kefir": ("кефир 1%", ["кефир"], "l", 0.9),
    "milk": ("молоко 3.2%", ["молоко"], "l", 0.9),
    "yogurt": ("йогурт натуральный", ["йогурт"], "l", 0.15),
    "oats": ("овсянка геркулес", ["овсян", "геркулес"], "kg", 0.4),
    "buckwheat": ("гречка ядрица", ["гречн", "гречк"], "kg", 0.8),
    "rice": ("рис", ["рис"], "kg", 0.8),
    "bulgur": ("булгур", ["булгур"], "kg", 0.45),
    "pasta": ("макароны", ["макарон", "спагетти"], "kg", 0.4),
    "quinoa": ("киноа", ["киноа"], "kg", 0.25),
    "potato": ("картофель", ["картофель"], "kg", 1),
    "carrot": ("морковь", ["морковь"], "kg", 1),
    "cabbage": ("капуста белокочанная", ["капуста"], "kg", 1),
    "broccoli": ("брокколи", ["брокколи"], "kg", 1),
    "zucchini": ("кабачки", ["кабач"], "kg", 1),
    "cucumber": ("огурцы", ["огурец", "огурц"], "kg", 1),
    "tomato": ("помидоры", ["помидор", "томат"], "kg", 1),
    "onion": ("лук репчатый", ["лук"], "kg", 1),
    "greens": ("укроп", ["укроп", "петрушк"], "pack", 1),
    "apple": ("яблоки", ["яблок"], "kg", 1),
    "banana": ("бананы", ["банан"], "kg", 1),
    "berries": ("ягоды", ["ягод", "клубник"], "kg", 0.3),
    "nuts": ("грецкий орех", ["грецк", "миндал"], "kg", 0.1),
    "oil": ("масло подсолнечное", ["подсолнечн"], "l", 1),
    "tofu": ("тофу", ["тофу"], "kg", 0.2),
    "chickpeas": ("нут", ["нут"], "kg", 0.4),
    "lentils": ("чечевица", ["чечевиц"], "kg", 0.4),
    "beans": ("фасоль", ["фасоль"], "kg", 0.4),
    "bread": ("хлеб пшеничный", ["хлеб"], "pcs", 1),
    "cheese": ("сыр российский", ["сыр"], "kg", 0.2),
    "hummus": ("хумус", ["хумус"], "pack", 1),
}

SKIP = re.compile(
    r"игруш|книг|пакет|сок |пюре |магги|плавлен|нектар|соломка|икра |напиток овсян",
    re.I,
)

# Перекрёсток обычно дороже Магнита на ~8–15%
PK_FALLBACK_MULT = 1.12

# Глобальный opener для запросов к Перекрёстку (с прокси, если задан)
_PK_OPENER: Optional[urllib.request.OpenerDirector] = None
_PK_PROXY_URL: Optional[str] = None


def weight_kg(name: str) -> Optional[float]:
    m = re.search(r"(\d+[.,]?\d*)\s*(кг|kg)", name, re.I)
    if m:
        return float(m.group(1).replace(",", "."))
    m = re.search(r"(\d+)\s*(г|гр)\b", name, re.I)
    if m:
        return float(m.group(1)) / 1000
    m = re.search(r"(\d+)\s*мл", name, re.I)
    if m:
        return float(m.group(1)) / 1000
    m = re.search(r"(\d+[.,]?\d*)\s*л\b", name, re.I)
    if m:
        return float(m.group(1).replace(",", "."))
    return None


def normalize_price(rub: float, name: str, default_w: float) -> float:
    wk = weight_kg(name)
    if wk and wk > 0:
        return rub / wk
    if default_w and default_w != 1:
        return rub / default_w
    return rub


def mask_proxy(url: str) -> str:
    """Скрывает пароль в URL прокси для логов."""
    if not url:
        return ""
    try:
        p = urllib.parse.urlparse(url)
        if p.password:
            netloc = p.netloc.replace(f":{p.password}", ":****")
            return urllib.parse.urlunparse(p._replace(netloc=netloc))
        return url
    except Exception:
        return "<proxy>"


def resolve_proxy(cli_proxy: Optional[str] = None) -> Optional[str]:
    """
    Приоритет:
      1) --proxy
      2) PEREKRESTOK_PROXY
      3) HTTPS_PROXY / https_proxy
      4) HTTP_PROXY / http_proxy
      5) ALL_PROXY / all_proxy
    """
    candidates = [
        cli_proxy,
        os.environ.get("PEREKRESTOK_PROXY"),
        os.environ.get("HTTPS_PROXY") or os.environ.get("https_proxy"),
        os.environ.get("HTTP_PROXY") or os.environ.get("http_proxy"),
        os.environ.get("ALL_PROXY") or os.environ.get("all_proxy"),
    ]
    for c in candidates:
        if c and str(c).strip():
            return str(c).strip()
    return None


def setup_pk_opener(proxy_url: Optional[str] = None) -> None:
    """Создаёт urllib opener с прокси только для запросов Перекрёстка."""
    global _PK_OPENER, _PK_PROXY_URL
    _PK_PROXY_URL = proxy_url
    if not proxy_url:
        _PK_OPENER = urllib.request.build_opener()
        return

    # socks5 требует PySocks; если нет — понятная ошибка
    scheme = urllib.parse.urlparse(proxy_url).scheme.lower()
    if scheme in ("socks5", "socks5h", "socks4", "socks4a"):
        try:
            import socks  # noqa: F401  # PySocks
            import sockshandler  # type: ignore
        except ImportError:
            # urllib + ProxyHandler не умеет socks нативно
            try:
                from urllib.request import ProxyHandler

                # попробуем через requests-style если установлен pysocks через другой путь
                pass
            except Exception:
                pass
            # Стандартный ProxyHandler socks не поддерживает — используем
            # http-туннель только если схема http/https. Для socks даём инструкцию.
            raise SystemExit(
                "Для socks-прокси установите: pip install PySocks\n"
                "и используйте http/https прокси, либо socks через локальный "
                "HTTP-туннель (например, privoxy)."
            )

    handlers = []
    proxy_handler = urllib.request.ProxyHandler(
        {
            "http": proxy_url,
            "https": proxy_url,
        }
    )
    handlers.append(proxy_handler)
    # не читать системные NO_PROXY мешающие, если явно задали прокси
    handlers.append(urllib.request.HTTPHandler())
    handlers.append(urllib.request.HTTPSHandler())
    _PK_OPENER = urllib.request.build_opener(*handlers)


# ═══════════════════════════════════════════════════════════════
# МАГНИТ
# ═══════════════════════════════════════════════════════════════
MAGNIT_STORE = "992301"
MAGNIT_URL = "https://magnit.ru/webgate/v2/goods/search"


def magnit_search(term: str) -> dict:
    body = json.dumps(
        {
            "term": term,
            "pagination": {"limit": 20, "offset": 0},
            "sort": {"order": "asc", "type": "price"},
            "storeCode": MAGNIT_STORE,
            "storeType": "1",
            "catalogType": "1",
        }
    ).encode("utf-8")
    req = urllib.request.Request(
        MAGNIT_URL,
        data=body,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Origin": "https://magnit.ru",
            "Referer": "https://magnit.ru/",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read().decode("utf-8"))


def parse_magnit() -> dict:
    print("\n=== МАГНИТ ===")
    results = {}
    for key, (q, must, unit, default_w) in PRODUCTS.items():
        try:
            items = magnit_search(q).get("items") or []
            scored = []
            for it in items:
                price = it.get("price")
                if not price:
                    continue
                name = it.get("name") or ""
                if SKIP.search(name):
                    continue
                if not any(m in name.lower() for m in must):
                    continue
                rub = price / 100.0
                w = it.get("weighted") or {}
                if w.get("unitPrice"):
                    per = w["unitPrice"] / 100.0
                else:
                    per = normalize_price(rub, name, default_w)
                scored.append((per, name, rub, it.get("id")))
            scored.sort(key=lambda x: x[0])
            if scored:
                per, name, pack, pid = scored[0]
                results[key] = {
                    "name": name,
                    "price_rub": round(per, 2),
                    "pack_price": round(pack, 2),
                    "unit": unit,
                    "id": pid,
                    "source": "magnit_api",
                    "store": "Магнит",
                }
                print(f"  {key}: {round(per, 2)} ₽/{unit} | {name[:55]}")
            else:
                results[key] = None
                print(f"  {key}: NO MATCH")
            time.sleep(0.35)
        except Exception as e:
            results[key] = None
            print(f"  {key}: ERR {type(e).__name__}: {e}")
            time.sleep(0.5)
    ok = sum(1 for v in results.values() if v)
    print(f"Магнит: {ok}/{len(PRODUCTS)}")
    return results


# ═══════════════════════════════════════════════════════════════
# ПЕРЕКРЁСТОК
# ═══════════════════════════════════════════════════════════════
PK_VERSION = "1.4.1.0"
PK_BASE = f"https://www.perekrestok.ru/api/customer/{PK_VERSION}"
PK_SEARCH = f"{PK_BASE}/catalog/search/all"
PK_UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)


def _pk_headers() -> dict:
    h = {
        "User-Agent": PK_UA,
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "ru-RU,ru;q=0.9,en;q=0.8",
        "Origin": "https://www.perekrestok.ru",
        "Referer": "https://www.perekrestok.ru/",
        "Content-Type": "application/json",
    }
    cookie = os.environ.get("PEREKRESTOK_COOKIE", "").strip()
    if cookie:
        h["Cookie"] = cookie
    token = os.environ.get("PEREKRESTOK_TOKEN", "").strip()
    if token:
        h["Authorization"] = f"Bearer {token}"
        h["AccessToken"] = token
    return h


def pk_request(url: str, method: str = "GET", body: Optional[dict] = None) -> tuple[int, Any]:
    data = None
    if body is not None:
        data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers=_pk_headers(), method=method)
    opener = _PK_OPENER or urllib.request.build_opener()
    try:
        with opener.open(req, timeout=30) as r:
            raw = r.read().decode("utf-8")
            try:
                return r.status, json.loads(raw)
            except json.JSONDecodeError:
                return r.status, {"_raw": raw[:500]}
    except urllib.error.HTTPError as e:
        body_txt = ""
        try:
            body_txt = e.read().decode("utf-8", errors="replace")[:300]
        except Exception:
            pass
        return e.code, {"error": str(e), "body": body_txt}
    except Exception as e:
        return 0, {"error": f"{type(e).__name__}: {e}"}


def pk_search(term: str) -> tuple[int, list]:
    """Поиск товаров Перекрёсток. Возвращает (http_code, list of product dicts)."""
    q = urllib.parse.quote(term)
    url = f"{PK_SEARCH}?textQuery={q}&entityTypes[]=product"
    code, data = pk_request(url)
    if code != 200:
        return code, []

    items = []
    if isinstance(data, dict):
        content = data.get("content") or data
        for key in ("items", "products", "data", "results"):
            if isinstance(content.get(key), list):
                items = content[key]
                break
        if not items and isinstance(content.get("products"), dict):
            items = content["products"].get("items") or []
        if not items and isinstance(data.get("items"), list):
            items = data["items"]
    return code, items or []


def _pk_extract_price(item: dict) -> tuple[Optional[float], str, Any]:
    """Достаёт цену в рублях и название из карточки Перекрёстка."""
    name = (
        item.get("title")
        or item.get("name")
        or item.get("productTitle")
        or (item.get("product") or {}).get("title")
        or ""
    )
    price = None
    for path in (
        ("price",),
        ("priceTag", "price"),
        ("priceTag", "grossPrice"),
        ("prices", "price"),
        ("prices", "cost"),
        ("balanceState", "pricing", "price"),
        ("product", "price"),
    ):
        cur: Any = item
        ok = True
        for p in path:
            if not isinstance(cur, dict) or p not in cur:
                ok = False
                break
            cur = cur[p]
        if ok and isinstance(cur, (int, float)) and cur > 0:
            price = float(cur)
            break
        if ok and isinstance(cur, dict):
            for k in ("value", "amount", "price", "cost"):
                if isinstance(cur.get(k), (int, float)) and cur[k] > 0:
                    price = float(cur[k])
                    break
        if price:
            break

    if price is None:
        return None, name, item.get("plu") or item.get("id")

    # часто в копейках
    if price >= 500 and float(price).is_integer() and price == int(price):
        if price > 2000:
            price = price / 100.0

    return price, name, item.get("plu") or item.get("id")


def parse_perekrestok(magnit_results: Optional[dict] = None) -> dict:
    print("\n=== ПЕРЕКРЁСТОК ===")
    if _PK_PROXY_URL:
        print(f"  прокси: {mask_proxy(_PK_PROXY_URL)}")
    else:
        print("  прокси: не задан  (--proxy / PEREKRESTOK_PROXY / HTTPS_PROXY)")
    if os.environ.get("PEREKRESTOK_COOKIE"):
        print("  cookie: PEREKRESTOK_COOKIE задан")
    else:
        print("  cookie: не задан")

    code, probe_items = pk_search("гречка")
    print(f"  probe /catalog/search/all «гречка»: HTTP {code}, items={len(probe_items)}")

    if code == 403:
        print(
            "  ⚠ 403 Forbidden — IP/прокси заблокирован антиботом X5.\n"
            "    Попробуйте другой residential-прокси или cookies из браузера.\n"
            "    Сейчас: fallback = Магнит × {:.0%}.".format(PK_FALLBACK_MULT - 1)
        )
        return _pk_fallback(magnit_results)

    if code == 0:
        err = probe_items  # при code 0 pk_request вернул dict с error, но pk_search отдал []
        print(f"  ⚠ сетевая ошибка (проверьте прокси). fallback на Магнит × {PK_FALLBACK_MULT}")
        return _pk_fallback(magnit_results)

    if code != 200:
        print(f"  ⚠ HTTP {code}, fallback на коэффициент от Магнита")
        return _pk_fallback(magnit_results)

    results = {}
    for key, (q, must, unit, default_w) in PRODUCTS.items():
        try:
            code, items = pk_search(q)
            if code != 200:
                results[key] = None
                print(f"  {key}: HTTP {code}")
                time.sleep(0.4)
                continue

            scored = []
            for it in items:
                if not isinstance(it, dict):
                    continue
                prod = it.get("product") if isinstance(it.get("product"), dict) else it
                price, name, pid = _pk_extract_price(prod if isinstance(prod, dict) else it)
                if price is None or not name:
                    continue
                if SKIP.search(name):
                    continue
                if not any(m in name.lower() for m in must):
                    continue
                per = normalize_price(price, name, default_w)
                scored.append((per, name, price, pid))

            scored.sort(key=lambda x: x[0])
            if scored:
                per, name, pack, pid = scored[0]
                results[key] = {
                    "name": name,
                    "price_rub": round(per, 2),
                    "pack_price": round(pack, 2),
                    "unit": unit,
                    "id": pid,
                    "source": "perekrestok_api",
                    "store": "Перекрёсток",
                }
                print(f"  {key}: {round(per, 2)} ₽/{unit} | {name[:55]}")
            else:
                results[key] = None
                print(f"  {key}: NO MATCH")
            time.sleep(0.4)
        except Exception as e:
            results[key] = None
            print(f"  {key}: ERR {type(e).__name__}: {e}")
            time.sleep(0.5)

    ok = sum(1 for v in results.values() if v)
    print(f"Перекрёсток: {ok}/{len(PRODUCTS)}")
    if ok == 0:
        print("  0 совпадений — fallback на коэффициент от Магнита")
        return _pk_fallback(magnit_results)
    return results


def _pk_fallback(magnit_results: Optional[dict]) -> dict:
    """Оценка цен Перекрёстка = Магнит × multiplier."""
    results = {}
    src = magnit_results or {}
    for key, (q, must, unit, default_w) in PRODUCTS.items():
        m = src.get(key)
        if m and m.get("price_rub"):
            results[key] = {
                "name": f"[оценка] {m.get('name', key)}",
                "price_rub": round(m["price_rub"] * PK_FALLBACK_MULT, 2),
                "pack_price": round(
                    (m.get("pack_price") or m["price_rub"]) * PK_FALLBACK_MULT, 2
                ),
                "unit": unit,
                "id": None,
                "source": "fallback_magnit_x1.12",
                "store": "Перекрёсток",
            }
            print(f"  {key}: ~{results[key]['price_rub']} ₽/{unit} (fallback)")
        else:
            results[key] = None
    return results


# ═══════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════
def main():
    ap = argparse.ArgumentParser(
        description="Парсер цен Магнит + Перекрёсток",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Примеры прокси:
  python3 parse_prices.py --perekrestok --proxy http://127.0.0.1:8080
  python3 parse_prices.py --perekrestok --proxy http://user:pass@host:3128
  PEREKRESTOK_PROXY=http://user:pass@host:3128 python3 parse_prices.py --perekrestok
  HTTPS_PROXY=http://host:3128 python3 parse_prices.py --perekrestok
        """,
    )
    ap.add_argument("--magnit", action="store_true", help="только Магнит")
    ap.add_argument("--perekrestok", action="store_true", help="только Перекрёсток")
    ap.add_argument(
        "--proxy",
        metavar="URL",
        default=None,
        help="прокси только для Перекрёстка: http://user:pass@host:port",
    )
    args = ap.parse_args()
    do_magnit = args.magnit or not args.perekrestok
    do_pk = args.perekrestok or not args.magnit

    proxy = resolve_proxy(args.proxy)
    setup_pk_opener(proxy)

    magnit_res: dict = {}
    pk_res: dict = {}

    if do_magnit:
        magnit_res = parse_magnit()
        with open("magnit_prices_raw.json", "w", encoding="utf-8") as f:
            json.dump(magnit_res, f, ensure_ascii=False, indent=2)

    if do_pk:
        if not magnit_res:
            try:
                magnit_res = parse_magnit()
            except Exception:
                magnit_res = {}
        pk_res = parse_perekrestok(magnit_res)
        with open("perekrestok_prices_raw.json", "w", encoding="utf-8") as f:
            json.dump(pk_res, f, ensure_ascii=False, indent=2)

    app = {
        "updated": datetime.now().isoformat(timespec="seconds"),
        "sources": {},
    }
    if magnit_res:
        app["Магнит"] = {k: v["price_rub"] for k, v in magnit_res.items() if v}
        app["sources"]["Магнит"] = "https://magnit.ru/webgate/v2/goods/search"
    if pk_res:
        app["Перекрёсток"] = {k: v["price_rub"] for k, v in pk_res.items() if v}
        sources_pk = {v.get("source") for v in pk_res.values() if v}
        app["sources"]["Перекрёсток"] = (
            "api" if "perekrestok_api" in sources_pk else "fallback_magnit_x1.12"
        )
        if proxy:
            app["proxy_used"] = mask_proxy(proxy)

    with open("prices_live.json", "w", encoding="utf-8") as f:
        json.dump(app, f, ensure_ascii=False, indent=2)

    print("\n=== ИТОГ ===")
    print(f"updated: {app['updated']}")
    if proxy:
        print(f"прокси ПК: {mask_proxy(proxy)}")
    for store in ("Магнит", "Перекрёсток"):
        if store in app:
            print(f"{store}: {len(app[store])} цен → prices_live.json")
    print("Готово.")


if __name__ == "__main__":
    main()
