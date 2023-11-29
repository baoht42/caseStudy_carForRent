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
    userInfoContainer.textContent = 'Logged in as: ' + loggedInUser.username;
}

function displayRentalLocations() {
    let rentalLocations = getRentalLocations();
    let locationsSelect = document.getElementById('rentalLocationsSelect');

    rentalLocations.forEach(function(location) {
        let option = document.createElement('option');
        option.value = location.name;
        option.textContent = location.name;
        locationsSelect.appendChild(option);
    });
}

function getRentalLocations() {
    return [
        { name: 'Đà Nẵng' },
        { name: 'Sài Gòn' },
        { name: 'Hà Nội' },
        { name: 'Cần Thơ' },
        { name: 'Nha Trang' },
        { name: 'Sapa' }
    ];
}

function continueToBooking() {
    var selectedLocation = document.getElementById('rentalLocationsSelect').value;
    if (selectedLocation) {
        alert('You selected: ' + selectedLocation);
        // Add logic to handle the selected location, e.g., redirect to booking page
    } else {
        alert('Please select a rental location.');
    }
}