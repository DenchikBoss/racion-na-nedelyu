# Рацион на неделю

Веб-приложение: меню на 7 дней, КБЖУ, список покупок, Telegram Mini App.

## Структура проекта

```
.
├── index.html           # разметка (семантика HTML5)
├── css/
│   └── style.css        # все стили
├── js/
│   └── main.js          # вся логика
├── img/                 # изображения (опционально)
├── prices_live.json     # актуальные цены
├── parse_prices.py      # парсер цен (Магнит / Перекрёсток)
└── README.md
```

## Быстрый старт

1. Скачайте полный архив с `css/style.css` и `js/main.js` (файлы большие, ~400 KB JS).
2. Или клонируйте репозиторий и положите `css/style.css` и `js/main.js` в соответствующие папки.
3. Запуск:

```bash
python3 -m http.server 8080
# открыть http://localhost:8080
```

Обновление цен:

```bash
python3 parse_prices.py
```

## Что сделано

- Разделение HTML / CSS / JS
- Относительные пути (`css/style.css`, `js/main.js`)
- Семантика: `<section>`, `<header>`, `<nav>`
- Hex-цвета в CSS в нижнем регистре
- Онлайн-цены из `prices_live.json`
- Telegram Mini App

Репозиторий: https://github.com/DenchikBoss/racion-na-nedelyu
