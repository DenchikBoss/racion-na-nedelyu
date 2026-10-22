# Рацион на неделю

Веб-приложение: меню на 7 дней, КБЖУ, список покупок, Telegram Mini App.

**Репозиторий:** https://github.com/DenchikBoss/racion-na-nedelyu

## Структура

```
.
├── index.html
├── css/
│   └── style.css      # (+ style-0…3.css при разбиении)
├── js/
│   └── main.js        # или main-part1…3.js
├── prices_live.json
├── parse_prices.py
└── README.md
```

## Важно: догрузка CSS и JS

В GitHub уже есть: `index.html`, `css/style.css` (entrypoint), `prices_live.json`, README.

Полные **css/** и **js/** (~400 KB) загрузите из архива `racion-complete.zip`:

1. Скачайте zip из чата / artifacts.
2. На GitHub: **Add file → Upload files**
3. Перетащите папки `css/` и `js/` (или файлы внутри).
4. Commit.

Или локально:

```bash
unzip racion-complete.zip -d racion
cd racion
git clone https://github.com/DenchikBoss/racion-na-nedelyu.git
cp -r css js parse_prices.py git-repo/
cd git-repo
git add css js parse_prices.py
git commit -m "Add CSS and JS"
git push
```

## Запуск

```bash
python3 -m http.server 8080
```

Цены: `python3 parse_prices.py` → обновляет `prices_live.json`.
