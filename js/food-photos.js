// Реальные фото блюд (Unsplash) + умный подбор по названию
(function () {
  var NEXT = {
  oatmeal: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&h=600&q=80",
  porridge: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&h=600&q=80",
  syrniki: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&h=600&q=80",
  omelette: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&h=600&q=80",
  eggs: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&h=600&q=80",
  cottage: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&h=600&q=80",
  avocado: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&h=600&q=80",
  pancakes: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&h=600&q=80",
  smoothie: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&h=600&q=80",
  toast_salmon: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&h=600&q=80",
  yogurt: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&h=600&q=80",
  granola: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&h=600&q=80",
  borscht: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&h=600&q=80",
  soup: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&h=600&q=80",
  chicken_soup: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&h=600&q=80",
  chicken: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&h=600&q=80",
  chicken_plate: "https://images.unsplash.com/photo-1532550907401-a532f99da741?auto=format&fit=crop&w=800&h=600&q=80",
  turkey: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=800&h=600&q=80",
  beef: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&h=600&q=80",
  cutlets: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&h=600&q=80",
  meatballs: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&h=600&q=80",
  salmon: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&h=600&q=80",
  fish: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&h=600&q=80",
  shrimp: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&h=600&q=80",
  buckwheat: "https://images.unsplash.com/photo-1612929632978-094f8f6e0a76?auto=format&fit=crop&w=800&h=600&q=80",
  rice: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=800&h=600&q=80",
  plov: "https://images.unsplash.com/photo-1563379091339-03b544987bcb?auto=format&fit=crop&w=800&h=600&q=80",
  pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&h=600&q=80",
  noodles: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&h=600&q=80",
  potato: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&h=600&q=80",
  puree: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&h=600&q=80",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&h=600&q=80",
  caesar: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&h=600&q=80",
  veggies: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&h=600&q=80",
  broccoli: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&h=600&q=80",
  cabbage: "https://images.unsplash.com/photo-1604908177453-7462950a6a3c?auto=format&fit=crop&w=800&h=600&q=80",
  mushrooms: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&h=600&q=80",
  tofu: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80",
  lentils: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&h=600&q=80",
  beans: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&h=600&q=80",
  casserole: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&h=600&q=80",
  snack: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&h=600&q=80",
  apple: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&h=600&q=80",
  banana: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&h=600&q=80",
  nuts: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&h=600&q=80",
  breakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&h=600&q=80",
  lunch: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80",
  dinner: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&h=600&q=80",
  default: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80"
  };
  if (typeof FOOD_PHOTOS === "object" && FOOD_PHOTOS) {
    Object.keys(FOOD_PHOTOS).forEach(function (k) { delete FOOD_PHOTOS[k]; });
    Object.assign(FOOD_PHOTOS, NEXT);
  } else if (typeof window !== "undefined") {
    window.FOOD_PHOTOS = NEXT;
  }
})();

function dishPhoto(d) {
  if (!d) return FOOD_PHOTOS.default;
  if (d.img) return d.img;
  var name = (d.name || "").toLowerCase();
  var tags = ((d.tags || []).join(" ") + " " + (d.meal || "")).toLowerCase();
  var s = name + " " + tags;
  if (/сырник/.test(s)) return FOOD_PHOTOS.syrniki;
  if (/запеканк/.test(s)) return FOOD_PHOTOS.casserole;
  if (/цезарь/.test(s)) return FOOD_PHOTOS.caesar;
  if (/борщ/.test(s)) return FOOD_PHOTOS.borscht;
  if (/щи\b|рассольник|солянка/.test(s)) return FOOD_PHOTOS.soup;
  if (/куриный суп|суп с лапш|лапш/.test(s)) return FOOD_PHOTOS.chicken_soup;
  if (/чечевич|чечевиц/.test(s)) return FOOD_PHOTOS.lentils;
  if (/плов/.test(s)) return FOOD_PHOTOS.plov;
  if (/паста|спагетти|макарон/.test(s)) return FOOD_PHOTOS.pasta;
  if (/тост.*лосос|лосос.*тост/.test(s)) return FOOD_PHOTOS.toast_salmon;
  if (/лосос|сёмг|семг/.test(s)) return FOOD_PHOTOS.salmon;
  if (/креветк/.test(s)) return FOOD_PHOTOS.shrimp;
  if (/треск|минтай|тунец|рыб/.test(s)) return FOOD_PHOTOS.fish;
  if (/индейк/.test(s)) return FOOD_PHOTOS.turkey;
  if (/тефтел|фрикадель/.test(s)) return FOOD_PHOTOS.meatballs;
  if (/котлет/.test(s)) return FOOD_PHOTOS.cutlets;
  if (/куриц|куриная|куриный|грудк|крылыш|терияки/.test(s)) return FOOD_PHOTOS.chicken;
  if (/говяд|бефстроганов|тушён/.test(s)) return FOOD_PHOTOS.beef;
  if (/свинин/.test(s)) return FOOD_PHOTOS.beef;
  if (/омлет|яичниц|пашот/.test(s)) return FOOD_PHOTOS.omelette;
  if (/яйц/.test(s)) return FOOD_PHOTOS.eggs;
  if (/овсян|овсяноблин/.test(s)) return FOOD_PHOTOS.oatmeal;
  if (/гречк/.test(s)) return FOOD_PHOTOS.buckwheat;
  if (/пшён|перлов|каш/.test(s)) return FOOD_PHOTOS.porridge;
  if (/рис|киноа|булгур/.test(s)) return FOOD_PHOTOS.rice;
  if (/пюре/.test(s)) return FOOD_PHOTOS.puree;
  if (/картоф/.test(s)) return FOOD_PHOTOS.potato;
  if (/блин/.test(s)) return FOOD_PHOTOS.pancakes;
  if (/смузи/.test(s)) return FOOD_PHOTOS.smoothie;
  if (/гранол/.test(s)) return FOOD_PHOTOS.granola;
  if (/йогурт/.test(s)) return FOOD_PHOTOS.yogurt;
  if (/творог/.test(s)) return FOOD_PHOTOS.cottage;
  if (/авокадо/.test(s)) return FOOD_PHOTOS.avocado;
  if (/салат/.test(s)) return FOOD_PHOTOS.salad;
  if (/тофу/.test(s)) return FOOD_PHOTOS.tofu;
  if (/нут|фасол|бобов/.test(s)) return FOOD_PHOTOS.beans;
  if (/голубц|капуст/.test(s)) return FOOD_PHOTOS.cabbage;
  if (/брокколи/.test(s)) return FOOD_PHOTOS.broccoli;
  if (/гриб/.test(s)) return FOOD_PHOTOS.mushrooms;
  if (/рагу|овощ/.test(s)) return FOOD_PHOTOS.veggies;
  if (/суп/.test(s)) return FOOD_PHOTOS.soup;
  if (/яблок/.test(s)) return FOOD_PHOTOS.apple;
  if (/банан/.test(s)) return FOOD_PHOTOS.banana;
  if (/орех|миндал|арахис/.test(s)) return FOOD_PHOTOS.nuts;
  if (/перекус|батончик|хумус|морков/.test(s)) return FOOD_PHOTOS.snack;
  if ((d.meal || "") === "завтрак") return FOOD_PHOTOS.breakfast;
  if ((d.meal || "") === "ужин") return FOOD_PHOTOS.dinner;
  if ((d.meal || "") === "обед") return FOOD_PHOTOS.lunch;
  return FOOD_PHOTOS.default;
}
