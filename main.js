
console.log("JS Loaded"); // เช็คว่าไฟล์ JS ถูกโหลดหรือไม่

const products = [
  { id: "A1", name: "ลูฟี่", price: 1200, img: "images/onepice_luffy.jpg" },
  { id: "A2", name: "ฟรีเรน", price: 900, img: "images/frieren.jpg" },
  { id: "A3", name: "ทันจิโร่", price: 1100, img: "images/yaiba_tanjiro.jpg" },
  { id: "A4", name: "มุอิจิโร่", price: 1000, img: "images/yaiba_muejiro.jpg" },
  { id: "A5", name: "เฟย์รุน", price: 700, img: "images/frieren_feyrun.jpg" },
  { id: "A6", name: "ทามาชิ", price: 800, img: "images/yaiba_tamashi.jpg" },
  { id: "A7", name: "ยูเบลล์", price: 800, img: "images/frieren_ubell.jpg" },
  { id: "A8", name: "เซนนิสึ", price: 900, img: "images/yaiba_zenitsu.jpg" },
  { id: "A9", name: "โกโจ", price: 1500, img: "images/jjk_gojo.jpg" },
  { id: "A10", name: "ยูจิ", price: 800, img: "images/jjk_yuji.jpg" },
  { id: "A11", name: "ยูตะ", price: 1000, img: "images/jjk_yuta.jpg" },
  { id: "A12", name: "สุคุนะ", price: 12000, img: "images/jjk_sukuna.jpg" }
];

const container_product = document.getElementById("product-container");

// สร้างสินค้าอัตโนมัติ
products.forEach(product => {
  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
    <p class="id">${product.id}</p>
    <img src="${product.img}" alt="${product.name}">
    <p class="name">${product.name}</p>
    <p class="price">ราคา: ${product.price} บาท</p>
  `;

  item.addEventListener("click", () => {
    document.getElementById("popup-img").src = product.img;
    document.getElementById("popup-name").textContent = product.name;
    document.getElementById("popup-price").textContent = "ราคา: " + product.price + " บาท";
    document.getElementById("popup-id").textContent = "รหัสสินค้า: " + product.id;
    document.getElementById("popup").style.display = "flex";
  });


  container_product.appendChild(item);
});

document.addEventListener("DOMContentLoaded", () => {
  // ปุ่มซื้อสินค้าใน popup
  document.getElementById("buy-btn").addEventListener("click", () => {
    const name = document.getElementById("popup-name").textContent;
    const price = document.getElementById("popup-price").textContent.replace("ราคา: ", "").replace(" บาท", "");
    const id = document.getElementById("popup-id").textContent.replace("รหัสสินค้า: ", "");
    const imgPath = document.getElementById("popup-img").src; 

    // ส่งค่าไป pay.html
    window.location.href =
  `pay.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&id=${encodeURIComponent(id)}&img=${encodeURIComponent(imgPath)}`;
  });

});




// ปิด popup
document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

// ปิด popup เมื่อคลิกนอกกล่อง
window.addEventListener("click", (e) => {
  if (e.target.id === "popup") {
    document.getElementById("popup").style.display = "none";
  }
});