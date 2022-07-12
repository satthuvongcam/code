

let data1= $.ajax({
    type: "GET",
    url: 'https://60b4bc9c4ecdc1001748150c.mockapi.io/user', 
})
.then(data =>{
    localStorage.setItem('user', JSON.stringify(data))
    console.log(data);
})
.catch(err =>{
    console.log(err);
}) ; 

render()

function render () {
    let newData = JSON.parse(localStorage.getItem('user'));
    let users = ''
    for(let i = 0; i < newData.length; i++) {
        users += `
            <tr>
                <td>${newData[i].name}</td>
                <td>${newData[i].id}</td>
                <td>${newData[i].company}</td>
                <td>${newData[i].job}</td>
            </tr>
        `
    }
    $('.list__user').html(`${users}`)
    // localStorage.setItem('user', JSON.stringify(newData))
}
    
    
function update () {
    let newData = JSON.parse(localStorage.getItem('user'));
    let avatar = $('#avatar').val()
    let city = $('#city').val()
    let company = $('#company').val()
    let id = $('#nameID').val()
    let job = $('#job').val()
    let name = $('#name').val()
    let salary = $('#salary').val()
    let sdt = $('#phone').val()
    let username = $('#username').val()
    let checkExist = newData.find(function(user, index) {
        return user.id === id
    })
    console.log(checkExist);
    if(!checkExist) {
        newData.push({avatar, city, company, id, job, name, salary, sdt, username})
    } 
    else {
            checkExist.avatar = avatar
            checkExist.city = city
            checkExist.company = company
            checkExist.id = id
            checkExist.job = job
            checkExist.name = name
            checkExist.salary = salary
            checkExist.sdt = sdt
            checkExist.username = username
    }
    localStorage.setItem('user', JSON.stringify(newData))
    $('.closeModal').click()
    render()
}

// function changeImage () {
    // let newData = JSON.parse(localStorage.getItem('user'));
//     $('.list').css({color: 'red'})
//     $('img').attr('src', `https://64.media.tumblr.com/3fa525467a3cd740860bb4e33ead6d17/c1f852048585269f-d7/s640x960/04ec56f9aa2113fe27511db95c66a7e6c6aaeb2e.jpg`)
// }
// $('.click-btn').on('click', changeImage)