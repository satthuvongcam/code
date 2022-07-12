// Bài 1: 
// nhanSU = [
//     {ten: 'nguyen the su', phong: 'Hanh Chinh'}, 
//     {ten: 'nguyen van duc', phong: 'coder'}, 
//     {ten: 'lai the van', phong: 'coder'}, 
//     {ten: 'le van luong', phong: 'coder'}, 
//     {ten: 'ngo thi thao', phong: 'tester'}, 
//     {ten: 'dao linh huong', phong: 'tester'}, 
//     {ten: 'nguyen thi tra my', phong: 'Hanh Chinh'}
// ]

// chiTieu = [
//     {tenPhong: 'Hanh Chinh', chiTieu: 1200, luongCB: 1800},
//     {tenPhong: 'coder', chiTieu: 2000, luongCB: 2500},
//     {tenPhong: 'tester', chiTieu: 1300, luongCB: 1500}
// ]

// baoCaoCV = [
//     {tenNV: 'nguyen the su', soHT:300},
//     {tenNV: 'nguyen van duc', soHT:500},
//     {tenNV: 'nguyen the su', soHT:150},
//     {tenNV: 'lai the van', soHT:300},
//     {tenNV: 'nguyen the su', soHT:300},
//     {tenNV: 'ngo thi thao', soHT:240},
//     {tenNV: 'dao linh huong', soHT:500},
//     {tenNV: 'nguyen thi tra my', soHT:120},
//     {tenNV: 'dao linh huong', soHT:300},
//     {tenNV: 'ngo thi thao', soHT:360},
//     {tenNV: 'le van luong', soHT:400}
// ]

// Hãy dựa vào các bảng trên để tính lương cuối cùng 
// của mỗi người trong array nhanSU biết nếu mà phòng ban của những 
// người đó hoàn thành được chỉ tiêu trong bảng chiTieu 
// thì lương của mỗi người được cộng 10% lương 
// Nếu k hoàn thành chỉ tiêu thì bị trừ đi 2% lương
// Biết tổng chỉ tiêu của mỗi phòng đạt được bằng tổng 
// số phần công việc của từng thành viên trong phòng đó đã thực hiện được khai báo 
// là soHT trong array baoCaoCV

// let trungGian = JSON.stringify(nhanSU);
// let newNhansu = JSON.parse(trungGian)

// function chiTieuNhanVienPhong (arr1, arr2, nameRoom) {
//     let tongChiTieuPhong = 0
//     arr1.map(function(value1){
//         return arr2.map(function(value2){
//             if(value1.phong === nameRoom) {
//                 if(value1.ten === value2.tenNV) {
//                     tongChiTieuPhong += value2.soHT
//                 }
//             }
//         })
//     })
//     return tongChiTieuPhong
// }

// let luongNhanVien = newNhansu.map(function(value){
//     value.luong = 0
//     chiTieu.map(function(value1){
//         if(value.phong === value1.tenPhong) {
//             if(chiTieuNhanVienPhong(newNhansu, baoCaoCV, value.phong) >= value1.chiTieu) {
//                 value.luong += value1.luongCB * 110 / 100
//             } else {
//                 value.luong += value1.luongCB * 0.98
//             }
//         }
//     })
//     return value
// })
// console.log(luongNhanVien);

// Bài 2:  
// ttSach = [
//     {ten: 'Vuot len chinh minh', danhGia: 'A', nhaXB: 'Kim dong', ngayPhatHanh: '12/5/2018', giaNhap: 20000},
//     {ten: 'Putin', danhGia: 'A', nhaXB: 'tuoi tre', ngayPhatHanh: '12/5/2019', giaNhap: 12000},
//     {ten: 'Cach lam giau', danhGia: 'B', nhaXB: 'Kim dong', ngayPhatHanh: '16/6/2018', giaNhap: 15000},
//     {ten: 'Cach de lam Vuong Tu', danhGia: 'C', nhaXB: 'tuoi tre', ngayPhatHanh: '8/8/2017', giaNhap: 30000},
//     {ten: 'Cach de hack facebook', danhGia: 'B', nhaXB: 'Kim dong', ngayPhatHanh: '11/5/2019', giaNhap: 20000},
//     {ten: 'ngay mai tuoi sang', danhGia: 'C', nhaXB: 'tuoi tre', ngayPhatHanh: '16/7/2018', giaNhap: 40000},
//     {ten: 'Lam the nao de hieu 1 nguoi', danhGia: 'A', nhaXB: 'ban mai', ngayPhatHanh: '16/5/2017', giaNhap: 50000},
//     {ten: 'cach tap gym', danhGia: 'B', nhaXB: 'tuoi tre', ngayPhatHanh: '13/4/2020', giaNhap: 30000}
// ]

// nxBan = [
//     {ten: 'Kim dong', chiPhi: 5000},
//     {ten: 'tuoi tre', chiPhi: 15000},
//     {ten: 'ban mai', chiPhi: 10000}
// ]

// bienLai = [
//     {tenCH: 'HCM',
//      sach:[
//         {ten:'Vuot len chinh minh', soLuong:150},
//         {ten:'Putin', soLuong:50},
//         {ten:'Cach lam giau', soLuong:80},
//         {ten:'Cach de hack facebook', soLuong:20}
//     ]},
//     {tenCH: 'HN',
//      sach:[
//         {ten:'Vuot len chinh minh', soLuong:150},
//         {ten:'Putin', soLuong:100},
//         {ten:'Cach lam giau', soLuong:80},
//         {ten:'Cach de hack facebook', soLuong:80},
//         {ten:'Cach de lam Vuong Tu', soLuong:80},
//         {ten:'ngay mai tuoi sang', soLuong:60},
//         {ten:'Lam the nao de hieu 1 nguoi', soLuong:60}
//     ]},
//     {tenCH: 'SG',
//      sach:[
//         {ten:'Vuot len chinh minh', soLuong:50},
//         {ten:'Putin', soLuong:100},
//         {ten:'ngay mai tuoi sang', soLuong:60},
//         {ten:'Cach de hack facebook', soLuong:20}
//     ]},
//     {tenCH: 'DN',
//      sach:[
//         {ten:'Lam the nao de hieu 1 nguoi', soLuong:50},
//         {ten:'Putin', soLuong:50},
//         {ten:'Cach lam giau', soLuong:30},
//         {ten:'Cach de hack facebook', soLuong:20}
//     ]},
//     {tenCH: 'NA',
//      sach:[
//         {ten:'cach tap gym', soLuong:50},
//         {ten:'Putin', soLuong:50},
//         {ten:'Cach lam giau', soLuong:30},
//         {ten:'Lam the nao de hieu 1 nguoi', soLuong:20}
//     ]},
// ]

// mucTieu = [
//     {danhGia: 'A', soLuong: 500},
//     {danhGia: 'B', soLuong: 300},
//     {danhGia: 'C', soLuong: 100}
// ]
// Hãy in lại ttsach có tên viết hoa ở đầu mỗi chữ VD: Cach Tap Gym 
// Hãy in lại ttsach theo danh sach ngày xuất bản gần nhất tới xa nhất 
// Giá của mỗi sách khi bán = giaNhap + chiPhi 
// bienLai là ứng với các đại lý phân phối sách  thì nếu tất cả đại lý bán hết số sách đã 
// được nêu của từng chi nhánh hãy in ra kết quả là đã đạt đủ chỉ tiêu được đề ra ở bảng mucTieu 
// hay chưa và nếu thiếu thì cần bán bao nhiêu sách nữa mới đạt được chỉ tiêu

// let updateName = ttSach.map(function(value){
//     value.ten = value.ten.split(' ').map(function(value1){
//         return value1.replace(value1[0], value1[0].toUpperCase())
//     }).join(' ')
//     return value
// })
// console.log(updateName);

// let sapXepNgay = ttSach.map(function(value){
//     value.ngayPhatHanh = value.ngayPhatHanh.split('/').reverse()
//     if(value.ngayPhatHanh[1] < 10) {
//         value.ngayPhatHanh[1] = '0' + value.ngayPhatHanh[1]
//     }
//     if(value.ngayPhatHanh[2] < 10) {
//         value.ngayPhatHanh[2] = '0' + value.ngayPhatHanh[2]
//     }
//     value.ngayPhatHanh = value.ngayPhatHanh.join('/')
//     return value
// }).sort(function(a,b){
//     if(a.ngayPhatHanh < b.ngayPhatHanh) {
//         return -1
//     }
// })
// console.log(sapXepNgay);

// let giaBanSach = ttSach.map(function(value){
//     value.giaBan = 0
//     nxBan.map(function(value1){
//         if(value.nhaXB === value1.ten) {
//             value.giaBan = value.giaNhap * value1.chiPhi
//         }
//     })
//     return value
// })
// console.log(giaBanSach);

// Bài 3 : 

// Hãy copy các array, object sau để khi chỉnh sửa bản copy không ảnh hưởng đến bản gốc
// let arr1 = [3,5,4,9,8]
// let arr2 = [...arr1]
// arr2[0] = 10
// console.log(arr1, arr2);

// let user = {name:'tung', age:20}
// let newUser = {...user}
// newUser.name = 'Truong'
// console.log(user, newUser);

// let info = [
// 	{name:'tung', age:20},
// 	{name:'cuong', age:21}
// ]
// let tg = JSON.stringify(info)
// let newInfo = JSON.parse(tg)
// newInfo[0].name = 'Quynh'
// console.log(info, newInfo);

// let infoUser = {
// 	name: 'trung',
// 	friend:['hai', 'vinh'],
// 	address:{number: 20, street:'nguyen trai'}
// }
// let Tg = JSON.stringify(infoUser);
// let update = JSON.parse(Tg);
// update.friend[0] = 'huy'
// console.log(infoUser, update);

//  Bài 4
// let array = [1,3,2,4,4,1,2,3,5,7,9,4,1,2,3]

// hãy tạo array mới cho biết số lần lập lại của các phần tử

// => [{value: 1, rep : 3}, {value: 2, rep: 3}, ....]

// let newArr = [...array]
// function countElementDuplicate(arr){
// 	let list = []
// 	arr.map(function(value1){
// 		let checkExist = list.find(function(el){
// 			return el.value === value1
// 		})
// 		if(!checkExist) {
// 			let cnt = 0
// 			arr.map(function(value2){
// 				if(value1 === value2) {
// 					cnt++
// 				}
// 			})
// 			list.push({
// 				value: value1,
// 				rep: cnt
// 			})
// 		}
// 	})
// 	return list
// }
// console.log(countElementDuplicate(newArr));

// Bài 5
hangHoa = [
    {ten: 'Rx-78-2', size:'MG', giaNiemYet: 35500, noiNhap:'Han Quoc', khoiLuong: 540},
    {ten: 'Rx-78-2', size:'HG', giaNiemYet: 12500, noiNhap:'Han Quoc', khoiLuong: 540},
    {ten: 'Sazabi', size:'MG', giaNiemYet: 50500, noiNhap:'Han Quoc', khoiLuong: 1250},
    {ten: 'Hi nu', size:'RG', giaNiemYet: 30500, noiNhap:'Han Quoc', khoiLuong: 870},
    {ten: 'Hi nu', size:'RG', giaNiemYet: 8800, noiNhap:'Nhat Ban', khoiLuong: 870},
    {ten: 'Hi V', size:'RG', giaNiemYet: 40500, noiNhap:'Han Quoc', khoiLuong: 1000},
    {ten: 'Strike Freedom', size:'MG', giaNiemYet: 56000, noiNhap:'Han Quoc', khoiLuong: 890},
    {ten: 'Strike Freedom', size:'HG', giaNiemYet: 4000, noiNhap:'Nhat Ban', khoiLuong: 570},
    {ten: 'Hi V', size:'RG', giaNiemYet: 8000, noiNhap:'Nhat Ban', khoiLuong:1000},
    {ten: 'Freedom 2.0', size:'MG', giaNiemYet: 45000, noiNhap:'Han Quoc', khoiLuong: 950},
    {ten: 'Freedom 2.0', size:'MG', giaNiemYet: 8000, noiNhap:'Nhat Ban', khoiLuong: 950}
]

tiGia = [
    {ten: 'Nhat Ban', giaTri:187},
    {ten: 'Han Quoc', giaTri:20}
]

giaShip = [
    {ten: 'Han Quoc', giaTien:9600, trongLuong: 10000},
    {ten: 'Nhat Ban', giaTien:4500, trongLuong: 10000}
]

// 1)
// Hãy tính giá trị của mỗi món hàng ở trong array Hàng Hóa 
// khi về Việt Nam sẽ có giá trị thô (chưa tính lãi) là bao nhiêu?
// Biết giá trị thô tính bằng giá niêm yết nhân với giá trị 
// tính theo tỉ giá của nơi nhập cộng với phí ship ứng với từng nơi nhập 
// Lưu ý giá tiền của bảng giá ship là đang theo tiền tệ của tên chưa tính theo chênh lệch tỉ giá  
// VD : ứng với trọng lượng là 10000 sẽ có giá ship là 9600 mệnh kim hàn quốc 
// 2)
// Hỏi nếu nhập 2 hàng Freedom 2.0 size MG từ hàn quốc, 5 hi 
// v từ hàn quốc và 3 strike freedom từ nhật Bản thì cần bỏ ít nhất số tiền là
// bao nhiêu để nhập hàng về 
// 3) So sánh giá trị chênh lệch của từng sản phẩm khi nhập từ hàn quốc và Nhật Bản
// 4) Viết hàm find(thuoctinh, giatri) in ra những phần tử thỏa mãn yêu cầu tìm kiếm
// find(size, MG)

let tg = JSON.stringify(hangHoa);
let hangHoaCopy = JSON.parse(tg);
let Tg = JSON.stringify(tiGia);
let tiGiaCopy = JSON.parse(Tg);
let TG = JSON.stringify(giaShip);
let giaShipCopy = JSON.parse(TG);


let priceProduct = hangHoaCopy.map(function(value){
	tiGiaCopy.map(function(value1){
		giaShipCopy.map(function(value2){
			if(value.noiNhap === value1.ten){
				giaShip = (value2.giaTien / value2.trongLuong) * value.khoiLuong
				if(value.noiNhap === value2.ten){
					value.tienSanPham = (giaShip + value.giaNiemYet) * value1.giaTri
				}
			}
		})
	})
	return value
})
// console.log(priceProduct);

// function tienNhapHang (arr1, nameProduct, quantity, nameProduce){
// 	let sum = 0
// 	arr1.map(function(value){
// 		if(value.ten === nameProduct) {
// 			if(value.noiNhap === nameProduce) {
// 				sum += quantity * value.tienSanPham
// 			}
// 		}
// 	})
// 	return sum
// }
// let tongTienNhapHang = tienNhapHang(priceProduct, 'Freedom 2.0', 2, 'Han Quoc') + 
// tienNhapHang(priceProduct, 'Hi V', 5, 'Han Quoc') +
// tienNhapHang(priceProduct, 'Strike Freedom', 3, 'Nhat Ban') 
// console.log(tongTienNhapHang);

for(let value in priceProduct) {
    console.log(323, priceProduct[value]);
}




