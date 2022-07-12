let newData = []
let active = 1
let totalPage = 10
let pageSize = 10

render(newData)

function changePage () {
    $('.page-btn').css({background: 'none'})
    $(`.page${active}`).css({background: 'green'})
    let showData = newData.slice((active - 1) * pageSize, active * pageSize)
    render(showData)
}

function page() {
    $('.list__btn').html('')
    totalPage = Math.ceil(newData.length / pageSize)
    for(let i = 1; i <= totalPage; i++) {
        $('.list__btn').append(`<button class='page-btn page${i}'>${i}</button>`)
        $(`.page${i}`).on('click', function () {
            active = i
            changePage()
        })
    }
    changePage()
}

function getData () {
    $.ajax({
        url: 'https://www.nodemy.vn/api/bootcamp-1-s',
        type: 'GET'
    })
    .then(function(data){
        newData = data
        page()
    }).catch(function(err){
        console.log(err);
    })
}
getData()

function down() {
    if(active === 1) {
        active = totalPage
    } else {
        active--
    }
    changePage()
}

function up() {
    if(active === totalPage) {
        active = 1
    } else {
        active++
    }
    changePage()
}

function render (data) {
    $('.listProduct').html('')
    for(let i = 0; i < data.length; i++) {
        $('.listProduct').append(`
            <tr>
                <td>${i + 1}</td>
                <td>${data[i].ProductName}</td>
                <td>${data[i].Price}</td>
                <td>${data[i].Storage}</td>
                <td>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='Edit(${i})'>Edit</button>
                </td>
                <td>
                    <button onclick='Delete(${i})'>Delete</button>
                </td>
            </tr>
        `)
    }
}

$('#changePageSize').on('change', function() {
    let value = $('#changePageSize').val()
    pageSize = value
    page()
})

function add() {
    let ProductName = $('#product-name').val()
    let Price = $('#price').val()
    let Storage = $('#storage').val()
    if(!ProductName || !Price || !Storage) {
        alert('Vui lòng điền đầy đủ thông tin')
    }
    let checkExist = newData.find(function(product){
        return product.ProductName === ProductName
    })
    if(!checkExist) {
        newData.push({ProductName, Price, Storage})
    }
    $('.closeModal').click()
    let showData = newData.slice((active - 1) * pageSize, active * pageSize)
    render(showData)
}

let editProductName = $('#product-name')
let editPrice = $('#price')
let editStorage = $('#storage')
let newIndex 
function Edit(index) {
    newIndex = index
    $('.update-btn').css({display: 'block'})
    $('.add-btn').css({display: 'none'})
    editProductName.val() = newData[index].ProductName
    editProductName.focus()
    editPrice.val() = newData[index].Price
    editPrice.focus()
    editStorage.val() = newData[index].Storage
    editStorage.focus()
}

function update() {
    newData[newIndex] = {ProductName: editProductName.val(), Price: editPrice.val(), 
        Storage: editStorage.val()}
    $('.closeModal').click()
    let showData = newData.slice((active - 1) * pageSize, active * pageSize)
    render(showData)
}

function Delete(index){
    newData.splice(index, 1)
    let showData = newData.slice((active - 1) * pageSize, active * pageSize)
    page()
    render(showData)
}

