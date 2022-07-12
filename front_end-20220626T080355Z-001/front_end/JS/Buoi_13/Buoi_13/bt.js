// Bài 1:
// Tạo 1 máy tính đơn giản có chức năng tính tổng, tích của 2 số nhập vào
// Và hiện ra được lịch sử và kết quả của từng phép tính

// let numbers = document.querySelectorAll('.btn')
// let result = document.querySelector('#RESULT')

// for(let number of numbers) {
//     number.addEventListener('click', function(){
//         result.innerHTML += this.value
//     })
// }

// function equal () {
//     let res = result.innerHTML
//     let output = eval(res)
//     result.innerHTML = output
// }

// function clean() {
//     result.innerHTML = ""
// }

// function undo() {
//     let res = result.innerHTML
//     result.innerHTML = res.substring(0, res.length - 1)
// }

// Bài 2:
// Hãy tạo ra 1 nút show ảnh để khi click vào thì hiện ra 1 ảnh
// mà mình mong muốn và khi ấn lần 2 thì ảnh đó sẽ bị ẩn đi

// let image = document.querySelector('body img')
// image.setAttribute('style', 'display: none')

// function showImage () {
//     document.querySelector('.show').setAttribute('style', 'display: none')
//     image.setAttribute('style', 'display: block; width: 100%; height: 100%')
// }

// function hideImage() {
//     image.setAttribute('style', 'display: none')
//     document.querySelector('.show').setAttribute('style', 'display: block')
// }

// Bài 3:
// Hãy tạo 1 form đăng nhập đơn giản thỏa mãn các yêu cầu sau:
// Nếu ô nhập username để trống và ô password nhập sẽ
// hiện ra cảnh báo là không hợp lệ khi click vào nút login
// Nếu ô username nhập còn passwword để trống khi click vào nút login thì hiện ra cảnh báo
// Ô input username sẽ hợp lệ nếu mà độ dài nhập sẽ lớn hơn 5 và nhỏ hơn 12
// passwword có ít nhất 8 kí tự

// let user = document.querySelector('.form__user')
// let password = document.querySelector('.form__password')

// function warning () {
//     if(user.value === '' && password.value === '')  {
//         alert('Không hợp lệ')
//     }  else if(password.value === '') {
//         alert('ytry')
//     } else if (user.value === '') {
//         alert('đa')
//     } else if(user.value.length > 5 && user.value.length < 12 && password.value.length >= 8) {
//         alert('thành công')
//     }
// }

// Bài 4:
// const use = [
//     {username:'username1', password:'password1'},
//     {username:'nguyen van nam', password:'1232123'},
//     {username:'hoang van dai', password:'45456456'},
//     {username:'nguyen the nam', password:'1342442442'}
// ]
// Hãy hiện danh sách của use trên giao diện
// Tạo 1 form đăng nhập đơn giản ngoài 2 ô input username,
// password  có thêm 2 nút là sign up và sign in
// sau khi điền 1 username mới và password mới và click nút
// sign up thì danh sách use sẽ có thêm data của
// username va password mới được thêm
// Và khi ta điền username và password và ấn sign in thì
// nếu là username và password đã được khai báo trong use thì hiện ra thông báo
// đăng nhập thành công không thì báo đăng nhập thất bại

// let info = document.querySelector('.list__user')
// let pass = document.querySelector('.list__pass')
// for(let i = 0; i < use.length; i++) {
//     info.innerHTML += `<p> ${use[i].username} </p>`
//     pass.innerHTML += `<p> ${use[i].password} </p>`
// }

// let user = document.querySelector('.user')
// let password = document.querySelector('.password')

// function signUp() {
//     if(user.value === '' && password.value === '')  {
//         alert('Không hợp lệ')
//     }  else if(password.value === '') {
//         alert('Password không hợp lệ')
//     } else if (user.value === '') {
//         alert('User không hợp lệ')
//     } else if(user.value.length > 5 && password.value.length >= 8) {
//         info.innerHTML += `<p> ${user.value} </p>`
//         pass.innerHTML += `<p> ${password.value} </p>`
//         use.push({
//             username: user.value,
//             password: password.value
//         })
//         user.value = ''
//         password.value = ''
//     }
// }

// function check() {
//     let password = document.querySelector('.password')
//     let user = document.querySelector('.user')
//     let listUser = document.querySelectorAll('p')
//     let cnt = 0
//     for(let i = 0; i < use.length; i++) {
//         if((user.value == use[i].username) && (password.value == use[i].password)) {
//             alert('Đăng nhập thành công')
//             cnt++
//         }
//     }
//     if(cnt == 0) {
//         alert('Đăng nhập thất bại')
//     }
// }

//Bai 5
// Cho một thẻ input và một nút nhấn,  nhập vào một chuỗi khi nhấn nút
// chuyển các ký tự chữ thường thành chữ hoa, các ký tự cột thẻ input
// và một nút nhấn. Viết chữ hoa thành chữ thường. Ví dụ: nếu bạn nhập
// vào chuỗi ‘The Quick Brown Fox’ kết quả của chương trình là ‘tHE qUICK bROWN fOX’.

// let string = 'JavaScript'
// document.querySelector('body').innerHTML += `<p> ${string} </p>`
// let result = ''
// for(let i = 0; i < string.length; i++) {
//     if(string[i] >= 'A' && string[i] <= 'Z') {
//         result += string[i].toLowerCase()
//     } else {
//         result += string[i].toUpperCase()
//     }
// }
// document.querySelector('body').innerHTML += `<p> ${result} </p>`

//Bai 6
// Ứng dụng quản lý sản phẩm có các chức năng sau:
// Hiển thị danh sách sản phẩm
// Có thể thêm một sản phẩm mới vào danh sách
//Có thể xoá một sản phẩm khỏi danh sách
// Có thể sửa tên của sản phẩm trong danh sách

const input = document.querySelector(".add__product input");

const inputEdit = document.querySelector(".edit__product input");

const productList = document.querySelector(".list__product-info");

const quantityProduct = document.querySelector('.list__product-quantity')

const products = [];

function add() {
    if (input.value.length > 0) {
        if(products.indexOf(input.value) === -1) {
            products.push(input.value);
            render()
            input.value = "";
        } else {
            input.value = "";
        }
    } 
}

function render() {
    let content = ''
    products.forEach((product, index) => {
        content += `
            <div class="item__product">
            <div class="item__product-name"  onclick="selectProduct(${index})">${product}</div>
            <div class="item__product-edit"><button onclick="useBtnEditProduct(${index})">Edit</button></div>
            <div class="item__product-delete"><button onclick="deleteProduct(${index})">Delete</button></div>
            </div>
        `;
         
    });
    if(products.length > 1) {
        quantityProduct.textContent = products.length + ' ' + 'products'
    } else {
        quantityProduct.textContent = products.length + ' ' + 'product'
    }
    productList.innerHTML = content
}

let indexNow
function selectProduct(index) {
    inputEdit.value = products[index]
    inputEdit.focus()
    indexNow = index
}

function useBtnEditProduct (index) {
    products[index] = inputEdit.value
    inputEdit.value = ""
    render()
}

function editProduct(indexNow) {
    products[indexNow] = inputEdit.value
    render()
}

function deleteProduct(index) {
    products.splice(index, 1)
    render()
}
