// 1.
// Hãy cho biết hôm nay là thứ mấy, ngày, tháng, năm nào

// var a = new Date()
// console.log(a.getDate());
// console.log(a.getMonth());
// console.log(a.getFullYear());
// console.log(a.getDay());

// 2
// var sinhNhat = '10/5/2000'
// a, năm nay bao nhiêu tuổi
// b, Ngày sinh nhật tiếp theo vào thời điểm nào

// var sinhNhat = new Date('2000, 05, 10')
// var today = new Date()
// var tuoi = today.getFullYear() - sinhNhat.getFullYear()
// console.log(tuoi);

// sinhNhat.setMonth(16)
// console.log(sinhNhat);

// 3
// a, 	Hãy tạo ra date của ngày đầu tuần này
// b,	Hãy tạo date của ngày cuối tuần này
// c,	hãy tạo date của ngày đầu tháng này
// d,	Hãy tạo date của ngày cuối tháng này
// e,	Hãy cho biết tháng này có bao nhiêu ngày


function getDay(stringDate, findDay) {
    var today = new Date(stringDate)
    var day = today.getDay()
    var diff = day - findDay
    today.setDate(today.getDate() - diff)
    return today.toLocaleDateString()
}
console.log(getDay('2022/6/15', 6));

// today.setMonth(5,1)
// console.log(39, today);

// var today = new Date()
// var nextMonth = today.getMonth() + 1
// today.setMonth(nextMonth, 0)
// console.log(today.toLocaleDateString());

// console.log(today.getDate());

// 4:
// var phucBirthday = '26-11-1992'
// var cuongBirthday = '27-11-1994'
// 6.1 Đổi định dạng ngày thành ‘1992-11-26’
// 6.2 Quy đổi về cả 2 về object date
// 6.3 So sánh xem phuc hay cuong lớn tuổi hơn
// 6.4 Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?
// 	gợi ý: dùng setDate(getDate + 100)

// 	dùng hàm getDay để tìm ra thứ  biết rằng:
// 	0: chủ nhật
// 	1: thứ 2  ..

// var phucBirthday = new Date(1992, 10, 26)
// var a = phucBirthday.toLocaleDateString().split('/').reverse().join('-')
// console.log(61, a);
// var cuongBirthday = new Date(1994, 10, 27)
// var b = cuongBirthday.toLocaleDateString().split('/').reverse().join('-')
// console.log(b);

// var a1 = new Date(phucBirthday)
// console.log(67, a1);
// var b1 = new Date(cuongBirthday)
// console.log(69, b1);

// var today = new Date()
// var tuoiPhuc = today.getFullYear() - phucBirthday.getFullYear()
// var tuoiCuong = today.getFullYear() - cuongBirthday.getFullYear()
// console.log('Phuc - Cuong:', tuoiPhuc - tuoiCuong);

// phucBirthday.setDate(phucBirthday.getDate() + 100)
// console.log(77, phucBirthday);
// console.log(phucBirthday.getDate(phucBirthday));




