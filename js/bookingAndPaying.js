document.addEventListener('DOMContentLoaded', function () {
    const selectedLocation = localStorage.getItem('selectedLocation');
    // hiển thị địa điểm đã chọn
    document.getElementById('selectedLocation').innerHTML = 'Selected Location: ' + selectedLocation;

    //gọi hàm
    displayRentalDetails(selectedLocation);


    populateCarTypes();
});

//hiển thị ảnh xe và info theo selectedLocation
function displayRentalDetails(selectedLocation) {
    // Example: assume different details for each location
    if (selectedLocation === 'Đà Nẵng') {
        document.getElementById('carImage').src = '/css/image/car1.jpg';
        document.getElementById('carPrice').innerHTML = 'Price: $50 per day';
        document.getElementById('contactInfo').innerHTML = 'Contact: 123-456-7890';
    } else if (selectedLocation === 'Sài Gòn') {
        document.getElementById('carImage').src = 'css/image/car2.jpg';
        document.getElementById('carPrice').innerHTML = 'Price: $60 per day';
        document.getElementById('contactInfo').innerHTML = 'Contact: 987-654-3210';
    } else if (selectedLocation === 'Hà Nội') {
        document.getElementById('carImage').src = 'css/image/car3.jpg';
        document.getElementById('carPrice').innerHTML = 'Price: $55 per day';
        document.getElementById('contactInfo').innerHTML = 'Contact: 111-222-3333';
    }else if (selectedLocation === 'Cần Thơ') {
        document.getElementById('carImage').src = 'css/image/car4.jpg';
        document.getElementById('carPrice').innerHTML = 'Price: $55 per day';
        document.getElementById('contactInfo').innerHTML = 'Contact: 000-111-1233';
    }else if (selectedLocation === 'Nha Trang') {
        document.getElementById('carImage').src = 'css/image/car5.jpg';
        document.getElementById('carPrice').innerHTML = 'Price: $55 per day';
        document.getElementById('contactInfo').innerHTML = 'Contact: 8109-2314-1231';
    }else if (selectedLocation === 'Sapa') {
        document.getElementById('carImage').src = 'css/image/car6.jpg';
        document.getElementById('carPrice').innerHTML = 'Price: $55 per day';
        document.getElementById('contactInfo').innerHTML = 'Contact: 0901-1241-124';
    }

}


function populateCarTypes() {
    let carTypes = ['4 Seat', '7 Seat', 'Luxury'];
    let carTypeSelect = document.getElementById('carTypeSelect');

    carTypes.forEach(function(type) {
        let option = document.createElement('option');
        option.value = type;
        option.innerHTML = type;
        carTypeSelect.appendChild(option);
    });
}

// chọn hạng xe và tính ra số tiền total
function calculateTotal() {
    let selectedCarType = document.getElementById('carTypeSelect').value;

    // giá theo hạng xe
    let prices = {
        '4 Seat': 50,
        '7 Seat': 60,
        'Luxury': 80
    };

    let selectedPrice = prices[selectedCarType];
    document.getElementById('totalPrice').innerHTML = 'Total Price: $' + selectedPrice;
}

//in ra màn hình thông báo để chuyển đến bước thanh toán
function proceedToPayment() {
    let total = document.getElementById('totalPrice').innerHTML;
    alert('Proceeding to payment. Total Amount: ' + total);

}