
// Bai 1
// let input = $('#check')
// let password = $('#password')

// input.change(function() {
//     if(password.attr('type') === 'text') {
//         $('#password').attr('type', 'password')
//     } else {
//         $('#password').attr('type', 'text')
//     }
// })

// Bai 2
const newData = JSON.parse(localStorage.getItem('user'));
let index
const data = [
    {username: 'huy', class: 'B1'},	
    {username: 'hao', class: 'B2'},	
    {username: 'hai', class: 'B4'},	
    {username: 'kien', class: 'B2'},	
    {username: 'trung', class: 'B1'},	
    {username: 'tung', class: 'B3'},	
    {username: 'minh', class: 'B2'}
]

render()
function render () {
    $('.list__data').html('')
    newData.map(function(value, i) {
        $('.list__data').append(`
            <div class='change${i}' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <p>Username: ${value.username}</p>
                <p>Class: ${value.class}</p>
                <input type="checkbox" id="check${i}" onclick='check(${i})'> <br>
                <button onclick='Delete(${i})'>Delete</button>
            </div>
        `)
        $(`.change${i}`).on('click', function(e) {
            index = i
            $('.add').css({display: 'none'})
            $('.update').css({display: 'block'})
        })
    })
}

sortClass()
function sortClass () {
    newData.sort(function(a, b) {
        if(a.class < b.class) {
            return -1
        } else if(a.class === b.class) {
            if(a.username < b.username) {
                return -1
            }
        }
    })
    render()
}

function Delete(index){
    newData.splice(index, 1)
    localStorage.setItem('user', JSON.stringify(newData))
    render()
}

function check (index) {
    let input = $(`#check${index}`)
    input.change( function() {
        if(this.checked) {
            $(`.change${index}`).addClass('green')
        } else {
            $(`.change${index}`).removeClass('green')
        }
    })
}

function add() {
    let user1 = $('#user')
    let classUser = $('#classUser')
    if(!user1.val() || !classUser.val()) {
        return alert('Vui long dien day du thong tin')
    } 
    else {
        newData.push({username: user1.val(), class: classUser.val()})
        localStorage.setItem('user', JSON.stringify(newData))
    }
    $('.closeModal').click()
    sortClass()
    render()
}

function update () {
    let user1 = $('#user')
    let classUser = $('#classUser')
    if(!user1.val() || !classUser.val()) {
        return alert('Vui long dien day du thong tin')
    } 
    else {
        newData[index] = {username: user1.val(), class: classUser.val()}
        localStorage.setItem('user', JSON.stringify(newData))
    }
    $('.closeModal').click()
    sortClass()
    render()
}
    