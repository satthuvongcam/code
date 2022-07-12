
// Bài 1
// Hãy áp dụng DOM để hiển thị ngày giờ hiện lại lên giao diện
// Mỗi giây cập nhật 1 lần

// setInterval(function(){
//     let displayDate = new Date()
//     document.querySelector('body').innerHTML = displayDate
// }, 1000)

// Bài 2
// Áp dụng DOM để làm giao diện load tải file
	// mỗi giây tải được random từ 10 - 20% 
	// Khi tải đủ 100% thì hiển thị dòng chữ DONE bên dưới thanh load

// let sum = 0
// let downloadPercent = document.querySelector('.download__percent')
// let i = setInterval(function(){
//     let randomPercent = Math.round(Math.random() * 10 + 10)
//     sum += randomPercent

//     let a = 0
//     if(sum >= 100) {
//         sum = 100
//         clearInterval(i)
//     }
    
//     let downloadTotal = document.querySelector('.download__total')
//     downloadTotal.setAttribute('style', 'background: green; height: 46px; width: 100%')

//     downloadPercent.setAttribute('style', `background: red; height: 46px; width: ${sum + '%'}; color: white; text-align: center; line-height: 46px`)
//     downloadPercent.innerHTML = sum + '%'
        
//     if (sum === 100) {
//         let button = document.createElement('button')
//         button.innerHTML = 'DONE'
//         button.setAttribute('style', 'display: block; margin-top: 8px; float: right')
//         document.querySelector('body').append(button)
//     }
// }, 1000)


// Bài 3
// Áp dụng DOM để hiển thị số đếm ngược 5s trên giao diện
// 	Sau khi đếm ngược xong thì mới hiển thị button Download 

// let a = document.querySelector('.clock')
// let button = document.createElement('button')
// button.innerHTML = 'Download'
// button.setAttribute('style', 'display: none')
// function workSameCountdown (second) {
//     let runTime = setInterval(function(){
//         if(second > 0) {
//             a.innerHTML = second + 's'
//         } 
//         else if(second === 0) {
//             a.innerHTML = second
//             setInterval(function(){
//                 a.innerHTML = ''
//                 button.setAttribute('style', 'display: block')
//                 document.querySelector('body').append(button)
//             }, 500)
//             clearInterval(runTime)
//         }
//         second -= 1
//     }, 1000)
// }
// workSameCountdown(5)

// Bài 4
// 	giao diện có 1 thẻ img
// 	Áp dụng DOM để đổi link ảnh, mỗi 3 giây đổi ảnh 1 lần (slide)

// let linkImg = ['https://wallpaperaccess.com/full/3253645.jpg', 
// 'https://wallpaperaccess.com/full/1972362.jpg', 
// 'https://i.ytimg.com/vi/oKh4U9h9R0I/maxresdefault.jpg'];

// let i = 0;
// setInterval(function () {
//     document.querySelector('.img-big img').setAttribute('src', `${linkImg[i]}`)
//     i++;
//     if (i == linkImg.length) {
//         linkImg.unshift('https://viettelhochiminh.com.vn/wp-content/uploads/2022/05/hinh-anh-luffy-ao-do-cuc-dep_055520526.jpg')
//         i = 0;
//     }
// }, 3000)

// Bài 5
// Tạo giao diện mỗi 2 giây đổi màu nền ngẫu nhiên 1 lần
// ( dùng random để tạo mã màu ngẫu nhiên)


setInterval(function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('body').setAttribute('style', `background-color: ${'#' + randomColor}`)
}, 2000)













