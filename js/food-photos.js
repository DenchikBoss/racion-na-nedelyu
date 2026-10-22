// Точные фото блюд: уникальный кадр по названию (не категориями).
// Источник: Pollinations (CORS открыт). Стабильность кадра — seed = id блюда.
// Если у блюда задано поле img — используется оно.

(function () {
  // Оставляем словарь как запасной офлайн-фолбэк (если pollinations недоступен в onerror UI).
  var FALLBACK = {
    oatmeal: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&h=600&q=80",
    syrniki: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&h=600&q=80",
    omelette: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&h=600&q=80",
    cottage: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&h=600&q=80",
    chicken: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&h=600&q=80",
    salmon: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&h=600&q=80",
    soup: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&h=600&q=80",
    salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&h=600&q=80",
    default: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80"
  };
  if (typeof FOOD_PHOTOS === "object" && FOOD_PHOTOS) {
    Object.keys(FOOD_PHOTOS).forEach(function (k) { delete FOOD_PHOTOS[k]; });
    Object.assign(FOOD_PHOTOS, FALLBACK);
  } else if (typeof window !== "undefined") {
    window.FOOD_PHOTOS = FALLBACK;
  }
})();

/** Нормализация названия для промпта */
function dishPhotoPrompt(name) {
  return String(name || "домашнее блюдо")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Уникальное фото конкретного блюда.
 * Пример: «Творог с бананом» → фото творога с бананом, не «любой творог».
 */
function dishPhoto(d) {
  if (!d) {
    return (typeof FOOD_PHOTOS !== "undefined" && FOOD_PHOTOS.default) || "";
  }
  if (d.img) return d.img;

  var name = dishPhotoPrompt(d.name);
  // seed фиксирует один и тот же кадр для одного id между перезагрузками
  var seed = (d.id != null ? d.id : name.length) * 97 + 13;

  var prompt =
    "realistic professional food photography of the exact Russian home dish: " +
    name +
    ", plated on a simple plate, natural daylight, appetizing, sharp focus, high detail, no text, no watermark";

  return (
    "https://image.pollinations.ai/prompt/" +
    encodeURIComponent(prompt) +
    "?width=800&height=600&nologo=true&seed=" +
    seed
  );
}
