// Bài 1
// var array = ['le trung kien', 'vu huu quy', 'lam thanh hai']
// hãy tạo ra array mới viết hoa tất cả chữ cái đầu tiên

// var newArray = array.map(function(value){
//     return value.split(' ').map(function(value1){
//         return value1.replace(value1[0], value1[0].toUpperCase())
//     }).join(' ')
// })
// console.log(newArray);

// Bài 2
var array = ['10/10/2020', '3/1/2021', '1/1/2022', '30/3/2019']
// hãy sắp xếp các date tăng dần

// var newArray = array.map(function(value){
//     return value.split('/').reverse().join('/')
// })
// console.log(newArray);

// var sapXep = newArray.sort(function(a,b){
//     if(a.split('/')[0] < b.split('/')[0]) {
//         return -1
//     } else if(a.split('/')[0] === b.split('/')[0]) {
//         if(a.split('/')[1] < b.split('/')[1]) {
//             return -1
//         } else if(a.split('/')[1] === b.split('/')[1]) {
//             if(a.split('/')[2] < b.split('/')[2]) {
//                 return -1
//             }
//         }
//     }
// })
// console.log(sapXep);

var newArray = array.map(function(value){
    var newDateArr = value.split('/').reverse()
    if(newDateArr[1] < 10){
        newDateArr[1] = '0' + newDateArr[1]
    }
    if(newDateArr[2] < 10){
        newDateArr[2] = '0' + newDateArr[2]
    }
    return newDateArr.join('/')
}).sort(function(a,b){
    if(a < b) {
        return -1
    }
})
console.log(newArray);


// Bài 3
var String =
`Cloud đang là xu hướng công nghệ năm 2021 và AWS trở thành nhà cung 
cấp nền tảng Cloud được sử dụng rộng rãi nhất AWS Các công ty về CNTT 
đang vô cùng “khát” những người có chứng chỉ AWS AWS Mức lương của một 
Developer mới đi làm 2 năm và có chứng chỉ AWS lương có thể đạt 30tr/tháng`

// a, hãy sửa tất cả chữ aws thành 'amazone web services'
// b, hãy sửa chữ aws cuối cùng 'amazone web services'
// c, hãy sửa chữ AWS  thứ 3 thành  'amazone web services'

// console.log(String.replace(/aws/gi, 'amazone web services'));

var newString = String.split(' ')
// for(var i = newString.length - 1; i >= 0; i--){
//     if(newString[i] === 'AWS'){
//         newString[i] = newString[i].replace('AWS', 'amazone web services')
//         break
//     }
// }
// console.log(newString.join(' '));

var cnt = 0
for(var i = 0; i < newString.length; i++) {
    if(newString[i] === 'AWS') {
        ++cnt
    }
    if(cnt === 3) {
        newString[i] = newString[i].replace('AWS', 'amazone web services')
    }
}
console.log(newString.join(' '));

// Bài 4 
var string = 
`<div class="dc" id="5011755102248859">
<div>
    <h3><a class="de bs">Mingo Lê</a></h3>
    <div class="df">Router dang ở vị trí hôm tức là trang chủ</div>
    <div class="dg"></div>
    <div class="dh di w">
        <span class="dj"><span class="dk bv"><a href="/login/?privacy_mutation_token=eyJ0eXBlIjowL
        CJjcmVhdGlvbl90aW1lIjoxNjUwMzMxODc2LCJjYWxsc2l0ZV9pZCI6NzAzNzcyNDEwMzQ1NDQ3fQ%3D%3D&amp;
        next=https%3A%2F%2Fm.facebook.com%2Fgroups%2Fcongdong.nodejs.vietnam%2Fposts%2F501158877
        2265492&amp;refid=18&amp;__tn__=R">Thích</a></span></span><span> · </span><abbr>14:05 Thứ Bảy</abbr>
    </div>
</div>
</div>
<div class="dc" id="5011766442247725">
<div>
    <h3><a class="de bs">Trần Quốc Đạt</a></h3>
    <div class="df">Lỗi này tốt nhất là làm 1 khóa về NodeJS trên F8 hay đâu đó nhé.
        Học có người dẫn dắt vẫn hơn.</div>
    <div class="dg"></div>
    <div class="dh di w"><a
            href="/comment/history/?ctoken=5011588772265492_5011766442247725&amp;refid=18&amp;__tn__=R">Đã
            chỉnh
            sửa</a><span> · </span><span class="dj"><span class="dk 
            bv"><a href="/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcm
            VhdGlvbl90aW1lIjoxNjUwMzMxODc2LCJjYWxsc2l0ZV9pZCI6NzAzNzcyNDEwM
            zQ1NDQ3fQ%3D%3D&amp;next=https%3A%2F%2Fm.facebook.com%2Fgroups%2F
            congdong.nodejs.vietnam%2Fposts%2F5011588772265492&amp;refid=18&a
            mp;__tn__=R">Thích</a></span></span><span> · </span><abbr>14:11 Thứ Bảy</abbr>
    </div>
</div>
</div>
<div class="dc" id="5011772908913745">
<div>
    <h3><a class="de bs">Quân Trần</a></h3>
    <div class="df">thím học cách screenshot trước đã, rồi đọc document trước khi
        hỏi. Hỏi này riết sau này không có ai trả lời đâu.</div>
    <div class="dg"></div>
    <div class="dh di w">
        <span class="dj"><span class="dk bv"><a href="/login/?privacy_mutation_
        token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUwMzMxODc2LCJjYWxsc2l0ZV9pZC
        I6NzAzNzcyNDEwMzQ1NDQ3fQ%3D%3D&amp;next=https%3A%2F%2Fm.facebook.com%2Fgr
        oups%2Fcongdong.nodejs.vietnam%2Fposts%2F5011588772265492&amp;refid=18&amp
        ;__tn__=R">Thích</a></span></span><span> · </span><abbr>14:13 Thứ Bảy</abbr>
    </div>
</div>
</div>
<div class="dc" id="5011829495574753">
<div>
    <h3><a class="de bs">Anh Ho</a></h3>
    <div class="df">Chụp màn hình uể oải quá.</div>
    <div class="dg"></div>
    <div class="dh di w">
        <span class="dj"><span class="dk bv"><a href="/login/?privacy_mutation_
        token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUwMzMxODc2LCJjYWxsc2l0ZV9pZ
        CI6NzAzNzcyNDEwMzQ1NDQ3fQ%3D%3D&amp;next=https%3A%2F%2Fm.facebook.com%2F
        groups%2Fcongdong.nodejs.vietnam%2Fposts%2F5011588772265492&amp;refid=18
        &amp;__tn__=R">Thích</a><span> · </span><a
            class="dl dm"
            href="/5011829495574753/likes/?cancel_uri=https%3A%2F%2Fm.facebook.
            com%2Fgroups%2Fcongdong.nodejs.vietnam%2Fposts%2F5011588772265492&a
            mp;refid=18&amp;__tn__=R"><img src="https://static.xx.fbcdn.net/rsrc
            .php/v3/yz/r/9LoyWtxbXTT.png" width="10" height="9" class="dn k" />1
            </a></span></span><span> · </span><abbr>14:40 Thứ Bảy</abbr>
    </div>
</div>
</div>
<div class="dc" id="5011854618905574">
<div>
    <h3><a class="de bs">Anh Duc Duong</a></h3>
    <div class="df">dùng screenshot đi em ai lại chụp màn hình kiểu này</div>
    <div class="dg"></div>
    <div class="dh di w">
        <span class="dj"><span class="dk bv"><a href="/login/?privacy_mutation_
        token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUwMzMxODc2LCJjYWxsc2l0ZV9pZC
        I6NzAzNzcyNDEwMzQ1NDQ3fQ%3D%3D&amp;next=https%3A%2F%2Fm.facebook.com%2Fg
        roups%2Fcongdong.nodejs.vietnam%2Fposts%2F5011588772265492&amp;refid=18&
        amp;__tn__=R">Thích</a><span> · </span><a
            class="dl dm"
            href="/5011854618905574/likes/?cancel_uri=https%3A%2F%2Fm.facebook.
            com%2Fgroups%2Fcongdong.nodejs.vietnam%2Fposts%2F5011588772265492&a
            mp;refid=18&amp;__tn__=R"><img src="https://static.xx.fbcdn.net/rsr
            c.php/v3/yz/r/9LoyWtxbXTT.png" width="10" height="9" class="dn k" />
            1</a></span></span><span> · </span><abbr>14:52 Thứ Bảy</abbr>
    </div>
</div>
</div>
`

// a, Hãy tạo ra array lấy ra tất cả id trong các thẻ có class = ‘dc’
// <div class="dc" id="5011755102248859">

// b, Hãy lấy ra tên của các user
// biết tên user ở trong thẻ HTML có dạng
// <h3><a class="de bs">Anh Duc Duong</a></h3>

var length = string.match(/class="dc"/g).length

// var index = -1
// for(var i = 0; i < length; i++){
//     var index = string.indexOf('class="dc"', index + 1)
//     var String = string.slice(index, index+31)
//     var lastIndex = String.lastIndexOf(`"`)
//     console.log(String.slice(lastIndex+1));
// }

var countUser = string.match(/class="de bs"/g).length

var index = -1
for(var i = 0; i < countUser; i++){
    var index = string.indexOf('class="de bs"', index + 1)
    var close = string.indexOf('>', index)
    var open = string.indexOf('<', index)
    var name = string.slice(close+1, open)
    console.log(name);
}












