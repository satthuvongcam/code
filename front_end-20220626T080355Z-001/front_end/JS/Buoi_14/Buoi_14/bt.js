// let congViec = [
//     {name:'lam bai tap buoi sang',status: 'to do', soluongbai: 5, ngayTao:8/4},
//     {name:'lam bai tap buoi trua',status: 'to do', soluongbai: 4, ngayTao:8/4},
//     {name:'lam bai tap buoi sang',status: 'to do', soluongbai: 7, ngayTao:8/4},
//     {name:'lam bai tap buoi sang',status: 'to do', soluongbai: 3, ngayTao:8/4},
//     {name:'lam bai tap buoi sang',status: 'doing', soluongbai: 4, ngayTao:9/4},
//     {name:'lam bai tap buoi sang',status: 'doing', soluongbai: 3, ngayTao:9/4},
//     {name:'lam bai tap buoi sang',status: 'doing', soluongbai: 7, ngayTao:9/4}
// ]
let congViec = []

let modal = document.querySelector('.modal')
let title = document.querySelectorAll('.nav__left span')
let quantity = document.querySelector('.nav__right-quantity')

render()
function render () {
    const newTask1 = document.querySelector('.new-task1')
    newTask1.innerHTML = ''
    const newTask2 = document.querySelector('.new-task2')
    newTask2.innerHTML = ''
    const newTask3 = document.querySelector('.new-task3')
    newTask3.innerHTML = ''
    for(let i = 0; i < congViec.length; i++) {
        if(congViec[i].priority === 'To do') {
            newTask1.innerHTML += `
                <span>${congViec[i].title}</span>
                <span>${congViec[i].lesson}</span>
                <span>${congViec[i].time}</span> <br>
                <button class="edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="edit(${i})">Edit</button>
                <button class="delete" onclick="Delete(${i})">Delete</button> <br>
            `
        } else if(congViec[i].priority === 'Doing') {
            newTask2.innerHTML += `
                <span>${congViec[i].title}</span>
                <span>${congViec[i].lesson}</span>
                <span>${congViec[i].time}</span> <br>
                <button class="edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="edit(${i})">Edit</button>
                <button class="delete" onclick="Delete(${i})">Delete</button> <br>
            `
        } else if(congViec[i].priority === 'Done') {
            newTask3.innerHTML += `
                <span>${congViec[i].title}</span>
                <span>${congViec[i].lesson}</span>
                <span>${congViec[i].time}</span> <br>
                <button class="edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="edit(${i})">Edit</button>
                <button class="delete" onclick="Delete(${i})">Delete</button> <br>
            `
        }
    }
    quantity.innerHTML = congViec.length
}

function add () {
    const titleTask = document.querySelector('#text').value
    const priority = document.querySelector('#priority').value
    const lesson = document.querySelector('#lesson').value
    const time = document.querySelector('#time').value
    if(!titleTask || !lesson || !time) {
        return alert('Vui lòng nhập đầy đủ thông tin')
    }
    congViec.push({title: titleTask, lesson: +lesson, priority: priority, time: time})
    document.querySelector('#text').value = ''
    document.querySelector('#lesson').value = ''
    document.querySelector('#time').value = ''
    document.querySelector('.closeModal').click()
    render()
}

let indexUpdate
let editTitle = document.querySelector('#edit-text')
let editPriority = document.querySelector('#edit-priority')
let editLesson = document.querySelector('#edit-lesson')
let editTime = document.querySelector('#edit-time')

function add1 () {
    if(!editTitle || !editLesson || !editTime) {
        return alert('Vui lòng nhập đầy đủ thông tin')
    }
    congViec[indexUpdate] = {title: editTitle.value, priority: editPriority.value, lesson: +editLesson.value, time: editTime.value}
    document.querySelector('.closeModal1').click()
    render()
}

function edit (index) {
    indexUpdate = index
    editTitle.value = congViec[index].title
    editTitle.focus()
    editLesson.value = congViec[index].lesson
    editLesson.focus()
    editTime.value = congViec[index].time
    editTime.focus()
}

function Delete(index) {
    congViec.splice(index, 1)
    render()
}