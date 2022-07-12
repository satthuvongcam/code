let data = []

let formLogin = document.querySelector('.form__login')
let formRegister = document.querySelector('.form__register')


function reverseLogin() {
    formLogin.setAttribute('style', 'display: block')
    formRegister.setAttribute('style', 'display: none')
}

function reverseRegis() {
    formLogin.setAttribute('style', 'display:none')
    formRegister.setAttribute('style', 'display: block')
}


function register() {
    let userRegis = document.querySelector('.input__user-regis')
    let passwordRegis = document.querySelector('.input__password-regis')
    let repeatPassword = document.querySelector('.repeat__password')
    if(!userRegis.value || !passwordRegis.value || !repeatPassword.value) {
        alert('Vui lòng nhập đầy đủ thông tin')
    }
     
    let cnt = 0
    for(let i = 0; i < data.length; i++) {
        if(data[i] === userRegis.value) {
            cnt++
        } 
    }
    if(cnt === 0) {
        data.push(userRegis.value) 
        if(passwordRegis.value === repeatPassword.value) {
            if(passwordRegis.value.length >= 8) {
                alert('Đăng kí thành công')
                setTimeout(function() {
                    formLogin.setAttribute('style', 'display: block')
                    formRegister.setAttribute('style', 'display: none')
                }, 1000)
            }
        } 
        else {
            alert('Mật khẩu không đúng')
        }
    } else {
        alert('Tài khoản đã tồn tại')
    }
}

function login () {
    let userLogin = document.querySelector('.input__user-login')
    let passwordLogin = document.querySelector('.input__password-login')
    let todoList = document.querySelector('.todoList')
    let signOut = document.querySelector('.sign__out-btn')

    if(!userLogin.value || !passwordLogin.value) {
        alert('Vui lòng nhập đầy đủ thông tin')
    }
    if(userLogin.value === document.querySelector('.input__user-regis').value) {
        if(passwordLogin.value === document.querySelector('.input__password-regis').value) {
            alert('Đăng nhập thành công')
            setTimeout(function() {
                formLogin.setAttribute('style', 'display: none')
                formRegister.setAttribute('style', 'display: none')
                todoList.setAttribute('style', 'display: block')
                signOut.setAttribute('style', 'display: block;')
            }, 1000)
        }
    }
    else {
        alert('Bạn chưa có tài khoản vui lòng đăng kí!')
    }
}


function calculate () {
    const bill = +document.querySelector('.todoList__body-bill input').value
    const service = document.querySelector('#service__input').value
    const people = +document.querySelector('.todoList__body-people input').value
    if(!bill || !people) {
        return alert('Vui lòng nhập đầy đủ thông tin')
    }
    let content = ''
    let cnt = 0
    for(let i = 0; i < service.length; i++) {
        content += service[i]
        cnt++
        if(cnt === 2) {
            break
        }
    }
    let percent = +content / 100
    const totalCal = document.createElement('input')
    let sum = (bill * percent) / people
    totalCal.value = sum
    document.querySelector('.todoList__footer-total').append(totalCal)
    setTimeout(function(){
        document.querySelector('.todoList__footer-total').innerHTML = ''
        document.querySelector('.todoList__body-bill input').value = ''
        document.querySelector('#service__input').value = ''
        document.querySelector('.todoList__body-people input').value = ''
    }, 3000)
}

function signOut () {
    let todoList = document.querySelector('.todoList')
    let signOut = document.querySelector('.sign__out-btn')
    formLogin.setAttribute('style', 'display: block')
    formRegister.setAttribute('style', 'display: none')
    todoList.setAttribute('style', 'display: none')
    signOut.setAttribute('style', 'display: none;')
}