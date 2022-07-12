let btnOpen = document.querySelector('.btnOpen')
let iconClose = document.querySelector('.modal__header i')
let btnClose = document.querySelector('.modal__footer button')
let modal = document.querySelector('.modal')

function toggleModal () {
    modal.classList.toggle('hide')
}
btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget) {
        toggleModal()
    }
})