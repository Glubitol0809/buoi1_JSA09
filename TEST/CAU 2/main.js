function registerUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kiểm tra xem tên người dùng đã tồn tại trong localStorage chưa ?
    if (localStorage.getItem(username)) {
        alert("Tài khoản này đã được sử dụng.");
        return false;
    }

    // Lưu thông tin người dùng vào localStorage !
    localStorage.setItem(username, password);
    
    alert("Đăng ký thành công!");
}