document.addEventListener('DOMContentLoaded', function () {
    // Lấy giá trị totalRental từ Local Storage
    let totalRental = localStorage.getItem('totalRental');

    // Hiển thị giá trị cần thanh toán
    displayPaymentDetails(totalRental);

    // Tạo mã QR code với thông tin thanh toán
    generateQRCode(totalRental);
});

function displayPaymentDetails(totalRental) {
    // Hiển thị lại giá trị cần thanh toán
    let paymentAmountElement = document.getElementById('paymentAmount');
    paymentAmountElement.innerHTML = 'Amount to Pay: $' + totalRental;
}

function generateQRCode(totalRental) {
    // Tạo mã QR code với thông tin thanh toán (có thể thêm totalRental vào đây)
    let paymentDetails = '{"amount": ' + totalRental + ', "description": "Car Rental Payment"}';

    let qrcodeContainer = document.getElementById('qrcode');

    // Tạo đối tượng QRious
    let qr = new QRious({
        element: qrcodeContainer,
        value: paymentDetails
    });
}

function confirmPayment() {
    alert('Thank you for your payment! We look forward to serving you again.');
}

