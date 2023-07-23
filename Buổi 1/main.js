// console.log(): in ra màn hình console
console.log("hello world")

// Tên - tuổi - trường học
console.log("DucAn")
console.log("18")
console.log("THPT Truong Chinh")

// Global - local
// Global: là một biến có thể gọi tất cả hay mọi nơi ở trong đoạn code của mình

// var - const
var name = "Thầy Phong"
// var: cách khai báo biến 
// name: tên biến - có thể thay đổi tùy thuộc vào ngữ cảnh sử dụng
// =: gán
// "Thầy Phong": giá trị của biến
console.log(name);
// Phương pháp cộng chuỗi name + đoạn văn
console.log(name + " đi code dạo");
console.log(name + " đi chơi game");
console.log(name + " đi thiết kế web");

var Username = "An"
console.log(Username + " đăng nhập");
// truyền data/biến vào console.log thì sử dụng ${data}
console.log(`${Username} đăng nhập`)

// kiểu dữ liệu
// 1. Kiểu số - number: số nguyên, số thực 
// in theo định dạng: Số thực/nguyên: [ số đã khai báo ]
var numberInteger = 10; // số nguyên
// số nguyên: 10
console.log(`Số nguyên: ${numberInteger}`)
console.log("Số nguyên:" + numberInteger)
var numberFloat = 10.5; // số thực
// số thực : 10.5
console.log(`Số thực: ${numberInteger}`)
console.log("Số thực:" + numberInteger)
// 2. Kiểu chuỗi - sting ""
console.log("Học code cùng thầy Phong")
// 3. Kiểu boolean - đúng sai nó sẽ mang 2 giá trị: true và false
console.log(true)
console.log(false)
// 4. undefined - không xác định tuy nhiên vẫn mang trong mình một giá trị bất kì
console.log(undefined);
// 5. null - rỗng và không mang bất kỳ giá trị hay là dữ liệu nào hết
console.log(null);
// 6. array: nơi lưu trữ các dữ liệu
var listArray = ["An",18, "male", false]
// Tên
console.log("Tên:" +listArray[0])
console.log(`Tên: ${listArray[0]}`)
// Tuổi
console.log(`Tuổi: ${listArray[1]}`)
// Giới tính
console.log(`Giới tính: ${listArray[2]}`)
// Trong mối quan hệ
console.log(`Trong mối quan hệ: ${listArray[3]}`)
// 7. object - đối tượng. Ta cần quan tâm 2 thứ: key - value
var cat = {
    name: "Muối",
    age: 4,
    fur: "light blue",
    type: "ALN"
}
// console.log(name.key)
console.log(cat.name);
console.log(cat.fur);
console.log(cat.age);
console.log(cat.type);









