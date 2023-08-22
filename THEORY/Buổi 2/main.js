// Định nghĩa: Câu lệnh để kiểm tra điều kiện sau đó thực hiện 1 công việc

// Công thức 
let troiMua = 1;
// ==:dùng để so sánh các giá trị
if(troiMua == true) {
    console.log("Trời mưa");
}
else if(troiMua == 0){
    console.log("Trời không mưa");
}
else if(troiMua == 1){
    console.log("Trời mưa");
}
else{
    console.log("Trời không mưa");
}


let a = 5;
let b = 10;
let c = 15;
// Bài 1: In ra số lớn nhất trong 2 số và b
if(a<b) {
    console.log("Số lớn nhất" + b)
}
else{
    console.log("Số lớn nhất" +a)
}

// Bài 2: In ra số lớn nhất trong 3 số a,b,c
// &&: "và" là có 2 điều kiện đều đúng
// ||: "hoặc" là có 1 trong 2 điều kiện đúng
if (a>b && a>c){
    console.log ("Số lớn nhất" + a)
}
else if (b>a && b>c){
    console.log("Số lớn nhất" + b)
}
else{
    console.log("Số lớn nhất" + c)
}



// [id cần lắng nghe sự kiện].addEventListener([Sự kiện],function)
// sự kiện: sự việc có thể diễn ra trong việc tương tác
// funtion: sẽ là nơi giải quyết những công việc đó
let mode = false;
let btnMode = document.getElementById("mode")
function clickMode(){
    // !false --> true
    mode = !mode
    // chuyển màu
    if (mode == true){
        document.body.style.backgroundColor = "black";
}
else{
    document.body.style.backgroundColor = "white"
}
}
btnMode.addEventListener("click",clickMode)   
// !: not -> chuyển trạng thái ngược so với thng ban đầu
// true --> false
// false --> true

// ARRAY VÀ LOOP
// ARRAY BẮT ĐẦU TỪ VỊ TRÍ 0;
// ARRAY lưu trữ các phần tử có cùng kiểu dữ liệu hoặc khác kiểu dữ liệu
// loop - vòng lặp: thực hiện một công việc theo chu kỳ có tính nhất quán
let array = ["Phong", "An", "Mẫn", "Sơn", "Lam", "Tiên", "Tiến"];

// Vòng lặp for
// Công thức: for( khởi tạo, điều kiện, tăng giá trị)
// Khởi tạo: tạo ra 1 biến hay tạo ra nơi bắt đầu để lặp 
// Điều kiện: điều kiện lặp sẽ cho ta biết điểm kết thúc nó nằm ở đâu
// Tăng giá trị: tăng điều kiện cho vòng lặp mới và sẽ kết thúc khi đủ điều kiện
// Phương thức sẽ là những hàm hoặc những đoạn code viết sẵn
// Công thức [tên array].length: độ dài của mảng
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// Bài 1: tính tổng từ 1 - 100
let tong = 0;
for(let i = 1; i <= 10; i++){
    // tong = tong + 1;
    tong += i;

}

// bài tập tính tổng số chẵn từ 1 --> 10
let tongChan = 0;
for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        tongChan += i;
    }
}
console.log(tongChan);