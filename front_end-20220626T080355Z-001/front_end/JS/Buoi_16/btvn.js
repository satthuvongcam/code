// function change() {
//     $('.text1').html('nodemy xin chào các bạn')
//     const input1 = +$('.number1').val()
//     const input2 = +$('.number2').val()
//     const input3 = +$('.number3').val()
//     const input4 = +$('.number4').val()
//     let sum = input1 + input2
//     $('.text2').html(`${sum}`)
//     if(input3 > input4) {
//         $('.text3').html(`${input3}`)
//     } else if(input3 < input4) {
//         $('.text3').html(`${input4}`)
//     }
// }

// function dark () {
//     $('body').css({background: 'black', color: 'white'})
// }

// function white () {
//     $('body').css({background: 'white', color: 'black'})
// }

// $('.dark').on('click', dark)
// $('.white').on('click', white)
// $('.changeMode').on('click', dark)
// $('.changeMode').on('dblclick', white)

// let typing
// function findInfo () {
//     const find = $('.find').val()
//     clearTimeout(typing)
//     typing = setTimeout(function(){
//         alert(`ban da go ${find}`);
// 	} , 1000);
// }
// $('.find').on('keyup', findInfo)

let active = 1
let totalPage = 10

for(let i = 1; i <= totalPage; i++) {
    $('.listBtn').append(`<button class='page${i}'>${i}</button>`)
    $(`.page${i}`).on('click', function(){
        active = i
        changePage()
    })
}

changePage ()

function changePage () {
    $('button').css({background: 'none'})
    $(`.page${active}`).css({background: 'green'})
}

function down() {
    if(active === 1) {
        active = totalPage
    }
    else {
        active--
    }
    changePage()
}

function up(){
    if(active === totalPage) {
        active = 1
    } else {
        active++
    }
    changePage()
}