
// let string = ''
// let image = document.createElement('img')

// function selectValue() {
//     let input = document.querySelector('input').value
//     string = `${input}`
//     image.setAttribute('src', string)
//     document.querySelector('body').append(image)
// }

// const button = document.querySelector('button')

// function change(){
//     document.querySelector('body').setAttribute('style', 'background: red')
//     document.querySelector('body').style.fontSize = '36px'
// }

// button.addEventListener('click', change)
// button.removeEventListener('click', change)

// Hide display password

// let input = document.querySelector('input')
// const button = document.querySelector('button')

// function displayHide () {
//     if(input.type === 'password') {
//         input.setAttribute('type', 'text')
//     } else if(input.type === 'text') {
//         input.setAttribute('type', 'password')
//     }
// }
// button.addEventListener('click', displayHide)


// Thu chi
let data = [
    // {type: true, money: 100000, detail: 'thu tiền'},
    // {type: true, money: 200000, detail: 'làm thêm'},
    // {type: true, money: 50000, detail: 'học bổng'},
    // {type: false, money: 30000, detail: 'tiền ăn'},
    // {type: false, money: 60000, detail: 'tiền nhà'},
    // {type: false, money: 100000, detail: 'tiền đóng học'}
]

function render () {
    const nodeList = document.querySelector('.node__list')
    nodeList.innerHTML = ''
    let balence = 0
    for(let i = 0; i < data.length; i++) {
        const tr =document.createElement('tr')
        if(data[i].type) {
            tr.innerHTML = `
                <td>${data[i].detail}</td>
                <td>${data[i].money}</td>
                <td>0</td>
            `
        } else {
            tr.innerHTML = `
                <td>${data[i].detail}</td>
                <td>0</td>
                <td>${data[i].money}</td>
            `
        }
        tr.style.background = data[i].type ? 'green' : 'red'
        tr.style.color = 'white'
        nodeList.append(tr)
        if(data[i].type) {
            balence += data[i].money
        } else {
            balence -= data[i].money
        }
    }
    document.querySelector('.balance').innerHTML = balence
}

function add () {
    const detail = document.querySelector('#detail').value
    const money = document.querySelector('#money').value * 1
    const type = document.querySelector('#type').value
    if(!money || !detail) {
        return alert('Vui lòng điền đủ thông tin')
    }
    document.querySelector('.modal').setAttribute('style', 'display: block;')
    data.push({type, money, detail})
    document.querySelector('#detail').value = ''
    document.querySelector('#money').value = ''
    document.querySelector('.closeModal').click()
    render()
}















