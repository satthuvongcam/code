let courseApi = 'http://localhost:3000/courses'

function start() {
    getCourses(renderCourses)

    handleCreateForm()
}

start()

function getCourses (callback) {
    fetch(courseApi)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}

function createCourse (data, callback) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}

function updateCourse (id, data, callback) {
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi + '/' + id, options)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}

function renderCourses(courses) {
    let listCoursesBlock = document.querySelector('#listCourses')
    let htmls = courses.map(function(course) {
        return `
            <li class='course-item-${course.id}'>
                <h4>${course.name}</h4>
                <p>${course.descprition}</p>
                <button onclick='handleDeleteCourse(${course.id})'>Delete</button>
                <button onclick='handleUpdateCourse(${course.id})'>Update</button>
            </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
    let createBtn = document.querySelector('#create')

    createBtn.onclick = function () {
        let name = document.querySelector('input[name="name"]').value
        let descprition = document.querySelector('input[name="descprition"]').value

        let formData = {
            name: name,
            descprition: descprition
        }
        createCourse(formData, function(){
            getCourses(renderCourses)
        })
    }
}
function handleUpdateCourse(id) {
    let createBtn = document.querySelector('#create')
    let updateBtn = document.querySelector('#update')
    createBtn.style.display = 'none'
    updateBtn.style.display = 'block'
    updateBtn.onclick = function () {
        let name = document.querySelector('input[name="name"]').value
        let descprition = document.querySelector('input[name="descprition"]').value

        let formData = {
            name: name, 
            descprition: descprition
        }
        updateCourse(id, formData, function(){
            getCourses(renderCourses)
            createBtn.style.display = 'block'
            updateBtn.style.display = 'none'
        })
    }
}

function handleDeleteCourse(id) {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(courseApi + '/' + id, options)
        .then(function(response){
            return response.json()
        })
        .then(function () {
            let courseItem = document.querySelector('.course-item-' + id)
            if(courseItem) {
                courseItem.remove()
            }
        })
}
