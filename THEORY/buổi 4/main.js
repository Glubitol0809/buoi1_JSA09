let accountStorage = [
    {
        "name": "Phong",
        "email": "mindx@gmail.com",
        "password": "mindx123"
    },
    {
        "name": "Phong",
        "email": "mindx123@gmail.com",
        "password": "mindx123"
    },
    {
        "name": "Phong",
        "email": "mindx123@gmail.com",
        "password": "mindx123"
    },
]

let sign_In_Btn = document.getElementById("sign_In_Btn");

sign_In_Btn.addEventListener("click", () => {
    let login_userName = document.getElementById("login_userName").value;
    let login_password = document.getElementById("login_password").value;

    let account = JSON.parsea(localStorage.getElementById("accountStorage")) || [];

    // kiểm tra đăng nhập
    let checkAccount = acount.find(account => account.email == login_userName && account.password == login_password)

    if (checkAccount == true) {
        alert("Bạn đăng nhập thành công")
    }else{
        alert("Bạn đăng nhập thất bại")
    }

    // console.log("click");
    // console.log(login_userName)
    // console.log(login_password)
    // if(login_userName.length == 0){
    //     alert("Vui lòng không để trống form đăng nhập");
    // }
    // if(login_password.length == 0){
    //     alert("Vui lòng không để trống form đăng nhập");
    // }

    // if (login_password.length > 0 && login_userName.length > 0) {
    //     let signIn = false;
    //     for(let i = 0; i < accountStorage.length; i++){
    //         if (accountStorage[i].email == login_userName && accountStorage[i].password == login_password) {
    //             alert("Bạn đã đăng nhập thành công");
    //         }
    //         else{
    //             alert("Bạn đã sai tên đăng nhập hoặc tài khoản")
    //         }
    //     }
    // }
})

let sign_Up_Btn = document.getElementById("sign_Up_Btn");

sign_Up_Btn.addEventListener("click", () => {
    let res_name = document.getElementById("res_name").value;
    let res_email = document.getElementById("res_email").value;
    let res_pass = document.getElementById("res_pass").value;

    //  Lưu tài khoản mật khẩu bằng local storage
    // JSON.parse: sẽ chuyển đổi từ dạng JSON sang dạng object
    // localStorage.getItem: gọi nơi chứa tài khoản và mật khẩu ra
    // || []: nếu chưa có nơi chưa tài khoản và mật khẩu thì accounts này sẽ là 1 array rỗng
    let accounts = JSON.parse(localStorage.getItem("accountStorage")) || [];

    // Kiểm tra tài khoản này đã tồn tại hay chưa
    // accounts.find(): nó sẽ trả về kiểu dữ liệu là true hoặc false
    let existingAcount = accounts.find(account => account.email == res_email);
    
    if (existingAcount == true) {
        alert("Tài khoản này đã tồn tại")
    }
    else{
        // tạo object lưu trữ thông tin của account
        let newAccount = {
            "name": res_name,
            "email": res_email,
            "password": res_pass
        }

        // thêm tài khoản mới vào danh và lưu vào localStorage
        accounts.push(newAccount);
        localStorage.setItem("accountStorage", JSON.stringify(accounts));
        alert("Bạn đăng ký thành công");
    }
})  