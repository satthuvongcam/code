
let formRegister = document.querySelector('.form__register')
formRegister.setAttribute('style', 'display:none')

function create () {
    let user = document.querySelector('.register__content-user input').value
    let password = document.querySelector('.register__content-password input').value
    let rePassword = document.querySelector('.register__content-rePassword input').value
    let email = document.querySelector('.register__content-email input').value
    let reEmail = document.querySelector('.register__content-reEmail input').value
    if(!user || !password || !rePassword || !email || !reEmail) {
        alert('Vui lòng điền đầy đủ thông tin')
    }
    if(user[0] >= 0 && user[0] <= 9) {
        alert('User không được bắt đầu bằng số')
    }
    if(password.length < 8) {
        alert('Password không hợp lệ')
    } else if(password !== rePassword) {
        alert('Mật khẩu không khớp')
    }
    if(email !== reEmail) {
        alert('Email không khớp vui lòng kiểm tra lại')
    }
}

function reset () {
    document.querySelector('.register__content-user input').value = ''
    document.querySelector('.register__content-password input').value = ''
    document.querySelector('.register__content-rePassword input').value = ''
    document.querySelector('.register__content-email input').value = ''
    document.querySelector('.register__content-reEmail input').value = ''
}