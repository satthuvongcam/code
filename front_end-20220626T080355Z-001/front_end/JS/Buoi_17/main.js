let newData = []
let active = 1
let totalPage = 10
let pageSize = 10

function changePage () {
    $('.page-btn').css({background: 'none'})
    $(`.page${active}`).css({background: 'green'})
    let showData = newData.slice((active - 1) * pageSize, active * pageSize)
    render(showData)
}

render (newData)

function page () {
    $('.listBtn').html('')
    totalPage = Math.ceil(newData.length / pageSize)   
    for(let i = 1; i <= totalPage; i++) {
        $('.listBtn').append(`<button class='page-btn page${i}'>${i}</button>`)
        $(`.page${i}`).on('click', function(){
            active = i
            changePage()
        })
    }
    
    changePage ()
}

function fetchData() {
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
fetchData()


function down() {
    if(active === 1) {
        active = totalPage
    }
    else {
        active--
    }
    changePage()
}

function up(){
    if(active === totalPage) {
        active = 1
    } else {
        active++
    }
    changePage()
}


function render (data) {
    $('.list').html('')
    for(let i = 0; i < data.length; i++) {
        $('.list').append(`
            <tr>
                <td>${i + 1}</td>
                <td>${data[i].ProductName}</td>
                <td>${data[i].Price}</td>
                <td>${data[i].Storage}</td>
                <td>
                    <button onclick='Edit(${i})'  data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                </td>
                <td>
                    <button onclick='Delete(${i})'>Delete</button>
                </td>
            </tr>
        `)
    }
}

function add() {
    let ProductName = $('#name').val()
    let Price = $('#price').val()
    let Storage = $('#storage').val()
    if(!ProductName || !Price || !Storage) {
        return alert('Vui lòng điền đầy đủ thông tin')
    }
    let checkExist = newData.find(function(product){
        return product.ProductName === ProductName
    })
    if(!checkExist) {
        newData.push({ProductName, Price, Storage})
    }
    $('.closeModal').click()
    render()
}

let ProductName = $('#name')
let Price = $('#price')
let Storage1 = $('#storage')

function Edit(index) {
    $('.updateProduct').css({display: 'block'})
    $('.addProduct').css({display: 'none'})
    indexUpdate = index
    ProductName.val() = newData[index].ProductName
    ProductName.focus()
    Price.val() = newData[index].Price
    Price.focus()
    Storage1.val() = newData[index].Storage
    Storage1.focus()
}

function update() {
    newData[indexUpdate] = {ProductName: ProductName.val(), Price: Price.val(), Storage: Storage1.val()}
    $('.closeModal').click()
    let showData = newData.slice((active - 1) * pageSize, active * pageSize)
    render(showData)
}

function Delete (index) {
    newData.splice(index, 1)
    console.log(newData);
    let showData = newData.slice((active - 1) * pageSize, active * pageSize)
    page()
    render(showData)
}

$('#quantityProduct').change(function(){
    let value = $('#quantityProduct').val()
    pageSize = value
    fetchData()
})