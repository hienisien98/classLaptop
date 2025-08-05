# Lesson 04
## Sự khác nhau giữa var và let
**1. Đối với var:**

for (var i = 0; i < 5; i++){

    console.log(i);

}

console.log(i) 

==> sẽ chạy ra kết quả

**2. Đối với let:**

for (let i = 0; i < 5; i++){

    console.log(i);

}

console.log(i) 

==> sẽ ra lỗi i is not defined

**3. Hoisting**

Là một cơ chế trong JavaScript mà trình thông dịch kéo phần khai báo biến/hàm lên đầu phạm vi trước khi thực thi code, chỉ kéo phần khai báo không kéo phần gán giá trị.

Dòng code sau

console.log(a);

var a = 5;

Thì sẽ được Javascript hiểu như sau

var a;

console.log(a);

a = 5;

- Hoisting đối với var:

console.log(a);

var a = 5;

==> Kết quả sẽ ra underfine

- Hoisting đối với let:

console.log(a);

var a = 5;

==> sẽ báo lỗi

# Điều kiện nâng cao
## if....else

if (điều kiện) {

    Khối lệnh nếu điều kiện đúng

} else

    Khối lệnh nếu điều kiện sai

## if....else if ... if

if (điều kiện 1) {

    Khối lệnh nếu điều kiện 1 đúng

} else if (điều kiện 2){

    Khối lệnh nếu điều kiện 2 đúng

} else if (điều kiện 3){

    Khối lệnh nếu điều kiện 3 đúng

}else

    Khối lệnh nếu điều kiện sai

## switch....case

Thay thế cho if else if khi bạn cần so sánh giá trị chính xác, giúp code ngắn gọn dễ đọc và hiệu quả hơn khi có nhiều điều kiện kiểm tra bằng nhau

switch (biểu_thức){

    case giá_trị_1:
        khối lệnh 1
        break; ==> break để khi đã tìm đúng case thì sẽ ko tiếp tục chạy những case bên dưới
    case giá_trị_2:
        khối lệnh 2
        break;
    default:
        khối lệnh default: ==> nếu các case trên ko thỏa thì sẽ mặc định chạy vào default
}

# Phân biệt ==, != và ===, !==
## == và !=
So sánh kiểu "lỏng lẻo", chỉ so sánh về giá trị

const result = "5" == 5; ==> true

## === và !===
So sánh tuyệt đối, so sánh về giá trị và cả kiểu dữ liệu (data type)

const result = "5" == 5; ==> false

# Vòng lặp nâng cao
## for.....in
Dùng tốt cho object (không khuyến khích dùng cho mảng), dùng để duyệt qua tất cả các thuộc tính của objects

let product = {

    Banana: 20,
    Apple: 30,
    Orange: 15

}

for (let property in product){

    console.log(property); ==> kết quả sẽ in ra tên của thuộc tính Banana, Aplle, Orange

    console.log(product[property]); ==> Kết quả sẽ in ra giá trị của thuộc tính

    console.log(`${property}: ${product[property]}`); ==> Kết quả sẽ in ra thuộc tính: giá trị
}

## forEach
Là một phương thức(method) được dùng để duyệt qua từng phần tử trong một mảng

const fruits = ["apple", "banana", "cherry"];

fruits.forEach ((fruit, index) => {

    console.log(`${index}: ${value}`); ==> kết quả sẽ in ra 0: apple 1: banana 2: cherry

})

## for...of
Là một câu lệnh lặp được dùng để lặp qua các giá trị của đối tượng có thể lặp được như Array, String. Map, Set

*** Lưu ý for...of không dùng được với object thông thường

1. Lặp qua mảng (array)

const arr = ["a", "b", "c"];

for (let value of arr){

    console.log(value); ==> kết quả sẽ in ra a, b ,c

}

2. Lặp qua string

for (const char of "Hien"){

    console.log(char); ==> kết quả sẽ in ra H i e n

}

## Continute
- Bỏ qua vòng lặp, chạy vòng lặp tiếp theo
- Nếu gặp continute thì bỏ qua đoạn code chạy phía dưới, và chạy tiếp vòng lặp tiếp theo

for (let i = 1; i <= 5; i++>){

    if (i % 2 === 0){
        continute;
    }
    console.log(i); ==> kết quả sẽ in ra 1 3 5
}

## Break
Gặp break sẽ thoát khỏi vòng lặp và không chạy vòng lặp tiếp theo

for (let i = 1; i <= 5; i++>){

    if (i % 2 === 0){
        break;
    }
    console.log(i); ==> kết quả sẽ in ra 1
}