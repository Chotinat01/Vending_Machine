const params = new URLSearchParams(window.location.search);
const productName = params.get("name");
const productPrice = params.get("price");
const productImg = params.get("img");

document.getElementById("product-name").textContent = productName;
document.getElementById("product-price").textContent = "ราคา: " + productPrice + " บาท";
document.getElementById("product-img").src = productImg;
document.getElementById("amount-qr").textContent = productPrice;
document.getElementById("amount-cash").textContent = productPrice;

const options = document.querySelectorAll(".payment-option");
const paymentInfos = document.querySelectorAll(".payment-info");
let selectedMethod = null;

options.forEach(option => {
  option.addEventListener("click", () => {
    options.forEach(opt => opt.classList.remove("selected"));
    option.classList.add("selected");
    selectedMethod = option.dataset.method;
    paymentInfos.forEach(info => info.style.display = "none");
    const detailToShow = document.getElementById(selectedMethod + "-details");
    if (detailToShow) {
      detailToShow.style.display = "block";
    }
  });
});

function startCountdown() {
  const countdownPopup = document.getElementById("countdown-popup");
  const countdownTimer = document.getElementById("countdown-timer");
  const countdownBox = countdownPopup.querySelector('.countdown-box p');
  
  countdownPopup.style.display = "flex"; 

  let seconds = 5;
  countdownTimer.textContent = seconds;

  const interval = setInterval(() => {
    seconds--;
    countdownTimer.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(interval);
      countdownBox.textContent = "ได้รับสินค้าแล้ว!";
      countdownTimer.style.display = "none";
      
      // หน่วงเวลา 1.5 วินาที แล้วกลับไปหน้าแรก
      setTimeout(() => {
        window.location.href = "main.html";
      }, 1500);
    }
  }, 1000);
}


document.getElementById("confirm-btn").addEventListener("click", () => {
  if (!selectedMethod) {
    alert("กรุณาเลือกวิธีการชำระเงิน");
    return;
  }
  
  let paymentSuccess = false;

  if (selectedMethod === "transfer") {
    alert(`ยืนยันการชำระด้วย QR Code สำเร็จ!\nสินค้าที่ซื้อ: ${productName}`);
    paymentSuccess = true;

  } else if (selectedMethod === "cash") {
    const cashInput = document.getElementById("chash-input").value;
    const paidAmount = parseFloat(cashInput);
    const itemPrice = parseFloat(productPrice);

    if (isNaN(paidAmount)) {
      alert("กรุณากรอกจำนวนเงินเป็นตัวเลขที่ถูกต้อง");
      return;
    }

    if (paidAmount < itemPrice) {
      alert(`จำนวนเงินไม่เพียงพอ!\nราคาสินค้าคือ ${itemPrice} บาท`);
    } else {
      const change = paidAmount - itemPrice;
      alert(`ชำระเงินสำเร็จ!\nได้รับเงินทอน ${change.toFixed(2)} บาท`);
      paymentSuccess = true;
    }
  }

  // ถ้าชำระเงินสำเร็จ ให้เริ่มนับถอยหลัง
  if (paymentSuccess) {
    startCountdown();
  }
});