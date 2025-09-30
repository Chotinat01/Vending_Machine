// เก็บข้อมูลสินค้าเป็น Array of Objects
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
products.forEach(product => { //.forEach วนลูปทุกตัวใน Array
  const item = document.createElement("div");
  item.classList.add("item"); // เพิ่ม class item ให้ div เพื่อให้ CSS สามารถแต่งสวยได้

  item.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p class="id">${product.id}</p>
    <p class="name">${product.name}</p>
    <p class="price">ราคา: ${product.price} บาท</p>
  `;

  container_product.appendChild(item);
});



// กดปุ่มซื้อใหญ่
document.getElementById("buy-btn").addEventListener("click", () => {
  // ทำ popup list ให้เลือกสินค้า
  let message = "เลือกสินค้าที่ต้องการซื้อ:\n\n";
  products.forEach(p => {
    message += `${p.id} - ${p.name} (${p.price} บาท)\n`;
  });

  const choice = prompt(message + "\n👉 พิมพ์รหัสสินค้า (เช่น A1, A2):");

  const selected = products.find(p => p.id.toUpperCase() === choice?.toUpperCase());

  if (selected) {
    // เลือกช่องทางชำระเงิน
    const payment = prompt(
      `คุณเลือกซื้อ: ${selected.name} ราคา ${selected.price} บาท\n\n` +
      "กรุณาเลือกช่องทางชำระเงิน:\n" +
      "1. เงินสด\n" +
      "2. พร้อมเพย์\n" +
      "3. แลกโค้ด\n\n👉 พิมพ์เลข 1, 2 หรือ 3"
    );

    if (payment === "1") {
      alert(`💵 ชำระด้วยเงินสด\nซื้อ ${selected.name} เรียบร้อย!`);
    } else if (payment === "2") {
      alert(`📱 ชำระด้วยพร้อมเพย์\nซื้อ ${selected.name} เรียบร้อย!`);
    } else if (payment === "3") {
      alert(`🎟️ ใช้โค้ดแลกสินค้า\nซื้อ ${selected.name} เรียบร้อย!`);
    } else if (payment !== null) {
      alert("❌ ช่องทางชำระเงินไม่ถูกต้อง");
    }

  } else if (choice !== null) {
    alert("❌ ไม่พบสินค้านี้ ลองใหม่อีกครั้ง");
  }
});


