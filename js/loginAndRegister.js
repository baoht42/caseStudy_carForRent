function login() {
    // Lấy thông tin từ các trường nhập liệu
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Lấy danh sách người dùng từ Local Storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra thông tin đăng nhập
    let checkUser = users.find(user => user.username === username && user.password === password);

    if (checkUser) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function register() {
    // Lấy thông tin từ các trường nhập liệu
    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;
    let newPhonenumber = document.getElementById('newPhonenumber').value;
    let newEmail = document.getElementById('newEmail').value;

    // Kiểm tra xem đã có thông tin người dùng trong Local Storage chưa
    let users = JSON.parse(localStorage.getItem('users')) ;

    // Kiểm tra xem tên người dùng đã tồn tại chưa
    let existingUser = users.find(user => user.username === newUsername);

    if (existingUser) {
        alert('Username already exists. Choose another username.');
    } else {
        // Thêm người dùng mới vào mảng
        users.push({ username: newUsername, password: newPassword,
                     phonenumber:newPhonenumber, email: newEmail });

        // Lưu mảng người dùng vào Local Storage
        localStorage.setItem('users', JSON.stringify(users));

        // Thông báo đăng ký thành công
        alert('Registration successful!');
    }
}
function showRegisterForm() {
    // Redirect to register.html
    window.location.href = "register.html";
}

function showLoginForm() {
    window.location.href = "login.html";
}