// Локальные фото: img/dishes/{id}.jpg
// Никакой генерации и внешних CDN в рантайме.

function dishPhoto(d) {
  if (!d) return "img/library/default.jpg";
  if (d.img) return d.img;
  if (d.id != null && d.id !== "") {
    return "img/dishes/" + d.id + ".jpg";
  }
  return "img/library/default.jpg";
}
