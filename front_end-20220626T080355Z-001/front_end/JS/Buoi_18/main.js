let modal = $('.modal')
let iconClose = $('.modal__header i')
let btnClose = $('.footer__close-btn')
let btnOpen = $('.openModal')

function toggleModal () {
    modal.toggleClass('hide')
}
iconClose.on('click', toggleModal)
btnClose.on('click', toggleModal)
btnOpen.on('click', toggleModal)
modal.on('click', function(e){
    console.log(e.currentTarget);
    if(e.target == e.currentTarget) {
        toggleModal()
    }
})




