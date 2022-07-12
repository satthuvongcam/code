let liseImg = ['https://64.media.tumblr.com/0720d562319a714c020710344ed67383/84bd6032ff13f728-fa/s1280x1920/085d228f71280869ce592e242cc1173c4a7c225f.jpg',
'https://64.media.tumblr.com/fbe92b963a71069e0d43413b84583332/ddfb7e08fe23c919-4c/s1280x1920/c002e0e718947211844d925604fdc7363a67dfd1.jpg',
'https://64.media.tumblr.com/6cf605ecd6f97662c7a1618630c9128c/1a71464d00203da9-5f/s1280x1920/205b9a844179671f6c29399d1a6f115f6b9444f8.jpg',
'https://64.media.tumblr.com/71ca725ff689ea05a73a170667ef6721/6678f908e1c30c57-a2/s1280x1920/8025e77a7fe3d1329fb1f71b04f9f335bbf60ba7.jpg']


sliderImg()

function sliderImg () {
    let i = 0
    setInterval(function(){
        $('.slider__img img').attr('src', `${liseImg[i]}`)
        i++
        if(i === liseImg.length) {
            i = 0
        }
    }, 3000)
}

let i = 0
function down () {
    if(i === 0) {
        i = liseImg.length - 1
    }
    else {
        i--
    }
    $('.slider__img img').attr('src', `${liseImg[i]}`)
}

function up () {
    if(i === liseImg.length - 1) {
        i = 0
    }
    else {
        i++
    }
    $('.slider__img img').attr('src', `${liseImg[i]}`)
}

$('.slider__pre').on('click', down)
$('.slider__next').on('click', up)