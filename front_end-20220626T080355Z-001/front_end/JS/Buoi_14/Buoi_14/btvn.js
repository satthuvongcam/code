
let user = document.querySelector('.user')
let password = document.querySelector('.password')
let button1 = document.querySelector('.sign-in-btn')
let button2 = document.querySelector('.regis-btn')
let customers = []



// Check import input 
function check () {
    if(!user.value || !password.value) {
        return false
    }
    return true
}

// Form regis
function addCustomer () {
    if(check()) {
        let tr = document.createElement('tr')
        let checkExist = customers.find(function(el){
            return el.user === user.value
        }) 
        if(!checkExist){
            customers.push({
                user: user.value,
                password: password.value
            })
            for(let i = 0; i < customers.length; i++) {
                tr.innerHTML = `
                    <td>${customers[i].user}</td>
                    <td>${customers[i].password}</td>
                `
            }
            user.value = ''
            password.value = ''
        } else {
            alert('User đã tồn tại')
        }
        document.querySelector('table').setAttribute('style', 'display: inline-block')
        document.querySelector('.node__list').append(tr)
    } else {
        alert('Không được để trốn user, password')
    }
}

// Form log in
function checkCustomer () {
    if(check()){
        let cnt = 0
        for(let i = 0; i < customers.length; i++) {
            if(user.value === customers[i].user && password.value === customers[i].password) {
                document.querySelector('table').setAttribute('style', 'display: none;')
                document.querySelector('.form').setAttribute('style', 'display: none;')
                document.querySelector('.app').setAttribute('style', 'display: block;')
                cnt++
            }
        }
        if(cnt === 0) {
            alert('Thất bại')
        }
    }
    else {
        alert('Không được để trống user, password')
    }
}

let data = []
let dataChange = data
// update list revenue and expenditure
function render () {
    const nodeList = document.querySelector('.node__list1')
    nodeList.innerHTML = ''
    let balence = 0
    for(let i = 0; i < dataChange.length; i++) {
        const tr =document.createElement('tr')
        if(dataChange[i].type) {
            tr.innerHTML = `
                <td>${dataChange[i].detail}</td>
                <td>${dataChange[i].money}</td>
                <td>0</td>
                <td>${dataChange[i].time}</td>
                <td><button class="edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="edit(${i})">Edit</button></td>
                <td><button class="Delete" onclick="Delete(${i})">Delete</button></td>
            `
        } else {
            tr.innerHTML = `
                <td>${dataChange[i].detail}</td>
                <td>0</td>
                <td>${dataChange[i].money}</td>
                <td>${dataChange[i].time}</td>
                <td><button style="background: red;" class="edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="edit(${i})">Edit</button></td>
                <td><button  style="background: red;" class="Delete" onclick="Delete(${i})">Delete</button></td>
            `
        }
        tr.style.background = dataChange[i].type ? 'green' : 'red'
        tr.style.color = 'white'
        nodeList.append(tr)
        if(dataChange[i].type) {
            balence += dataChange[i].money
        } else {
            balence -= dataChange[i].money
        }
    }
    document.querySelector('.balance').innerHTML = balence
}

// Creat button add revenue and expenditure
function add () {
    const detail = document.querySelector('#detail').value
    const money = document.querySelector('#money').value * 1
    const type = document.querySelector('#type').value
    const time = document.querySelector('#time').value
    if(!money || !detail) {
        return alert('Vui lòng điền đủ thông tin')
    }
    data.push({type: type,money: money,detail: detail, time: time})
    document.querySelector('#detail').value = ''
    document.querySelector('#money').value = ''
    document.querySelector('#time').value = ''
    document.querySelector('.closeModal').click()
    render()
    console.log(dataChange, data);
}

// Edit revenue and expenditure
let editContent = document.querySelector('#edit-detail')
let editMoney = document.querySelector('#edit-money')
let editType = document.querySelector('#edit-type')
let editTime = document.querySelector('#edit-time')
let indexUpdate

function add1 () {
    if(!money || !detail) {
        return alert('Vui lòng điền đủ thông tin')
    }
    // let indexEl = document.querySelector('#staticBackdrop .index')
    // const indexUpdate = indexEl.getAttribute('data-')

    data[indexUpdate] = {type: editType.value,money: +editMoney.value,detail: editContent.value, time: editTime.value}

    document.querySelector('.closeModal1').click()
    render()
}

function edit (index) {
    // let indexEl = document.querySelector('#staticBackdrop .index')
    // indexEl.setAttribute('data-', index)
    indexUpdate = index
    editContent.value = data[index].detail
    editContent.focus()
    editMoney.value = data[index].money
    editMoney.focus()
    editType.value = data[index].type
    editType.focus()
    editTime.value = data[index].time
    editTime.focus()
}

function Delete(index) {
    data.splice(index, 1)
    render()
}

// Filter time

let today = new Date()
let now = new Date()
let yesterday  = new Date(now.setDate(now.getDate() - 1))
let dayBefore  = new Date(now.setDate(now.getDate() - 1))

let month = today.getMonth() + 1
let lastMonth = month - 1
let monthBefore = month - 2

let monthArray = []
monthArray.push(month)
monthArray.push(lastMonth)
monthArray.push(monthBefore)

function wrap(a,b) {
    let tg = a
    a = b
    b = tg
    return [a,b]
}

let timeArray = []
timeArray.push(today.toLocaleDateString())
timeArray.push(yesterday.toLocaleDateString())
timeArray.push(dayBefore.toLocaleDateString())
console.log(timeArray);

let updateTime = timeArray.map(function(value){
    value = wrap(value.split('/')[0], value.split('/')[1]).join('/').concat('/').concat(value.split('/')[2])
    return value
})

function addTimeDay () {
    let contentTime = ''
    contentTime += `
        <button class="button1">${updateTime[0]}</button>
        <button class="button2">${updateTime[1]}</button>
        <button class="button3">${updateTime[2]}</button>
    `
    document.querySelector('.app__time-day').innerHTML = contentTime
}
addTimeDay()

function addTimeMonth () {
    let contentTime1 = ''
    contentTime1 += `
        <button class="month1">${monthArray[0].toString().concat('/').concat(updateTime[0].split('/')[2])}</button>
        <button class="month2">${monthArray[1].toString().concat('/').concat(updateTime[1].split('/')[2])}</button>
        <button class="month3">${monthArray[2].toString().concat('/').concat(updateTime[2].split('/')[2])}</button>
    `
    document.querySelector('.app__time-month').innerHTML = contentTime1
}
addTimeMonth()

function filterTime () {
    
    dataChange = data
    dataChange = data.filter(function(value){
        if(value.time == document.querySelector('.button1').innerHTML) {
            return true
        }
    })
    render()
}
document.querySelector('.button1').addEventListener('click', filterTime)

function filterTime2 () {
    dataChange = data
    dataChange = data.filter(function(value){
        if(value.time == document.querySelector('.button2').innerHTML) {
            return true
        }
    })
    render()
}
document.querySelector('.button2').addEventListener('click', filterTime2)

function filterTime3 () {
    dataChange = data
    dataChange = data.filter(function(value){
        if(value.time == document.querySelector('.button3').innerHTML) {
            return true
        }
    })
    render()
}
document.querySelector('.button3').addEventListener('click', filterTime3)

function filterMonth () {
    dataChange = data
    dataChange = data.filter(function(value){
        if(value.time.split('/')[1] == document.querySelector('.month1').innerHTML.split('/')[0]) {
            if(value.time.split('/')[2] == document.querySelector('.month1').innerHTML.split('/')[1]) {
                return true
            }
        }
    })
    render()
}
document.querySelector('.month1').addEventListener('click', filterMonth)

function filterMonth2 () {
    dataChange = data
    dataChange = data.filter(function(value){
        if(value.time.split('/')[1] == document.querySelector('.month2').innerHTML.split('/')[0]) {
            if(value.time.split('/')[2] == document.querySelector('.month2').innerHTML.split('/')[1]) {
                return true
            }
        }
    })
    render()
}
document.querySelector('.month2').addEventListener('click', filterMonth2)

function filterMonth3 () {
    dataChange = data
    dataChange = data.filter(function(value){
        if(value.time.split('/')[1] == document.querySelector('.month3').innerHTML.split('/')[0]) {
            if(value.time.split('/')[2] == document.querySelector('.month3').innerHTML.split('/')[1]) {
                return true
            }
        }
    })
    render()
}
document.querySelector('.month3').addEventListener('click', filterMonth3)






