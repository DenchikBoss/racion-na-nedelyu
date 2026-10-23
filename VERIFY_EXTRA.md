# Verify EXTRA dishes integration (2026-10-24)

## Counts
- DISHES unique ids: 245 (1–245)
- EXTRA_DISHES pushed: 45 (ids 201–245) + dish 200 fixed
- RECIPES: 245 (all ids have prep/cook/steps/tip)
- File size main.js: ~346 KB / 345670 chars

## Quality checks passed
1. Braces / brackets balanced
2. All 45 recipes: ≥3 steps, realistic prep+cook times, useful tip
3. cuisine field present on 201–245 (and 200 fixed to "греческая")
4. dishCuisine() fallback from tags for older dishes
5. Adaptive swiper: tasteProfile, updateTasteFromDish, adaptDeckAfterSwipe, tasteScore, proteinKey
6. Price coverage: ING_ALIASES + BASE_PRICES for пельмени, лаваш, тортилья, мисо, сулугуни, нори, киноа, тофу, нут, чечевица, фасоль, арахис (via alias), ростки сои (via alias)
7. No missing ingredients parse failures
8. index.html loads only main.js + food-photos.js (self-contained)

## Sample dishes integrated
- 201 Солянка мясная (русская)
- 204 Пельмени домашние
- 211 Спагетти болоньезе / 212 Карбонара / 213 Лазанья
- 219 Хачапури / 220 Харчо / 221 Лобио / 222 Чахохбили (грузинская)
- 223 Плов узбекский / 224 Лагман / 225 Шурпа
- 228 Курица тикка масала / 229 Дал
- 231 Кунг-пао / 232 Мисо-суп / 234 Пибимпап / 235 Пад тай
- 237–239 Тако / Чили / Кесадилья (мексиканская)
- 245 Тушёная картошка с мясом

## Known residual risks
- Some new ingredients fall back via aliases (price accuracy ±20–30% for rare items)
- Stock photos for 201–245 may still be missing in img/dishes/ (prompts available in artifacts)
- GitHub main.js was a 26-byte placeholder before this restore — Netlify may serve broken app until full push lands

## Action required
Push full local /home/workdir/artifacts/racion/js/main.js to GitHub (js/main.js) to replace placeholder.
