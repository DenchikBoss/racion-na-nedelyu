// Локальные фото блюд: img/dishes/{id}.jpg
// Имена файлов = id блюда без ведущих нулей (1.jpg … 245.jpg).
// Нет файла → onerror в photoHTML покажет emoji/default.

function dishPhoto(d) {
  if (!d) return "img/library/default.jpg";
  if (d.img) return d.img;
  if (d.id != null && d.id !== "") {
    return "img/dishes/" + d.id + ".jpg";
  }
  return "img/library/default.jpg";
}
