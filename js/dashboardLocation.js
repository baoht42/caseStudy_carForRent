document.addEventListener('DOMContentLoaded', function () {
    if (!isLoggedIn()) {
        // Kiểm tra trạng thái đã đăng nhập hay chưa
        window.location.href = "login.html";
    } else {
        // hiện thông tin người dùng nếu đăng nhập
        displayUserInfo();
        displayRentalLocations();
    }
});

function isLoggedIn() {
    return localStorage.getItem('loggedInUser') !== null;
}

function displayUserInfo() {
    let userInfoContainer = document.getElementById('userInfo');
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    userInfoContainer.innerHTML = 'Logged in as: ' + loggedInUser.username;
}

function displayRentalLocations() {
    let rentalLocations = getRentalLocations();
    let locationsSelect = document.getElementById('rentalLocationsSelect');

    rentalLocations.forEach(function(location) {
        let option = document.createElement('option');
        option.value = location.name;
        option.innerHTML = location.name;
        locationsSelect.appendChild(option);
    });
}

function getRentalLocations() {
    return [
        { name:  '' },
        { name: 'Đà Nẵng' },
        { name: 'Sài Gòn' },
        { name: 'Hà Nội' },
        { name: 'Cần Thơ' },
        { name: 'Nha Trang' },
        { name: 'Sapa' }
    ];
}

function continueToBooking() {
    let selectedLocation = document.getElementById('rentalLocationsSelect').value;
    if (selectedLocation) {
        alert('You selectedLocation: ' + selectedLocation);
        //lưu vào local storage
        localStorage.setItem('selectedLocation', selectedLocation);

        //Sau khi continue
        //Hiển thị hình ảnh xe kèm sdt người cho thuê, và giá ở thẻ html bookingCar
        window.location.href = "bookingCar.html";


    } else {
        alert('Please select a rental location.');
    }return selectedLocation;
}