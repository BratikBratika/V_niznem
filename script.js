// 📸 Фото товарів
// Додавай сюди свої назви файлів з папки "img"
const products = [
  "prod1.jpg",
  "prod2.jpg",
  "prod3.jpg",
  "prod4.jpg",
  "prod5.jpg",
  "prod6.jpg"
];

const gallery = document.getElementById("gallery");

products.forEach(item => {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img src="img/${item}" alt="Product">`;
  gallery.appendChild(card);
});
