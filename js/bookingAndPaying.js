document.addEventListener('DOMContentLoaded', function () {
    let selectedLocation = localStorage.getItem('selectedLocation');
    // hiển thị địa điểm đã chọn
    document.getElementById('selectedLocation').innerHTML = 'Selected Location: ' + selectedLocation;

    //gọi hàm
    displayRentalDetails(selectedLocation);


    populateCarTypes();
});

//hiển thị ảnh xe và info theo selectedLocation
function displayRentalDetails(selectedLocation) {
    console.log(selectedLocation)
    if (selectedLocation === 'Đà Nẵng') {
        document.getElementById('carImage').src = '/css/image/car1.jpg';
        document.getElementById('nameOfBranch').innerHTML = 'Huyndai';
        document.getElementById('contactInfo').innerHTML = 'Contact: 123-456-7890';
    } else if (selectedLocation === 'Sài Gòn') {
        document.getElementById('carImage').src = '/css/image/car2.jpg';
        document.getElementById('nameOfBranch').innerHTML = 'Mazda';
        document.getElementById('contactInfo').innerHTML = 'Contact: 987-654-3210';
    } else if (selectedLocation === 'Hà Nội') {
        document.getElementById('carImage').src = '/css/image/car3.jpg';
        document.getElementById('nameOfBranch').innerHTML = 'Ford';
        document.getElementById('contactInfo').innerHTML = 'Contact: 111-222-3333';
    }else if (selectedLocation === 'Cần Thơ') {
        document.getElementById('carImage').src = '/css/image/car4.jpg';
        document.getElementById('nameOfBranch').innerHTML = 'BMW';
        document.getElementById('contactInfo').innerHTML = 'Contact: 000-111-1233';
    }else if (selectedLocation === 'Nha Trang') {
        document.getElementById('carImage').src = '/css/image/car5.jpg';
        document.getElementById('nameOfBranch').innerHTML = 'Mitsubishi';
        document.getElementById('contactInfo').innerHTML = 'Contact: 8109-2314-1231';
    }else if (selectedLocation === 'Sapa') {
        document.getElementById('carImage').src = '/css/image/car6.jpg';
        document.getElementById('nameOfBranch').innerHTML = 'Mercedes';
        document.getElementById('contactInfo').innerHTML = 'Contact: 0901-1241-124';
    }

}


function populateCarTypes() {
    let carTypes = ['Sedan', 'SUV', 'Luxury'];
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
    let rentalDays = parseInt(document.getElementById('rentalDays').value, 10);

    if (isNaN(rentalDays) || rentalDays < 1) {
        alert('Please enter a valid number of rental days.');
        return;
    }

    let selectedCarType = document.getElementById('carTypeSelect').value;
    let prices = {
        'Sedan': 50,
        'SUV': 60,
        'Luxury': 80
    };

    let selectedPrice = prices[selectedCarType];
    let totalRental = rentalDays * selectedPrice;

    document.getElementById('totalPrice').innerHTML = 'Total Price: $' + totalRental;
    // lưu giá tiền tổng vào một local storage
    localStorage.setItem('totalRental', totalRental);
}

//in ra màn hình thông báo để chuyển đến bước thanh toán
function proceedToPayment() {
    let total = document.getElementById('totalPrice').innerHTML;
    alert('Proceeding to payment. Total Amount: ' + total);
    window.location.href= "payment.html";

}