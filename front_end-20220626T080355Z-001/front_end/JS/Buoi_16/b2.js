$.ajax({
    type: "GET",
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php"
})
.then(function(data){
    localStorage.setItem('cocktail', JSON.stringify(data))
    console.log(data);
})
.catch(function(err){
    console.log(err);
})

function render () {
    let getData = JSON.parse(localStorage.getItem('cocktail'));
    let drink = ''
    for(let index in getData) {
        for(let i = 0; i < getData[index].length; i++) {
            drink += `
            <tr>
                <td>${getData[index][i].idDrink}</td>
                <td>${getData[index][i].strAlcoholic}</td>
                <td>${getData[index][i].strCategory}</td>
                <td>${getData[index][i].strDrink}</td>
                <td>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='Edit(${i})'>Edit</button>
                </td>
            </tr>
        `
        }
    }
    $('.listDrink').html(drink)
}

function add() {
    let getData = JSON.parse(localStorage.getItem('cocktail'));
    let idDrink = $('#idDrink').val()
    let strAlcoholic = $('#strAlcoholic').val()
    let strCategory = $('#strCategory').val()
    let strDrink = $('#strDrink').val() 
    for(let index in getData) {
        let check = getData[index].find(function(drink){
            return drink.idDrink === idDrink
        })
        if(!check) {
            getData[index].push({idDrink, strAlcoholic, strCategory, strDrink})
        }
    }
    localStorage.setItem('cocktail', JSON.stringify(getData))
    $('.closeModal').click()
    render()
}

function down() {
    $('table').css({display: 'block'})
    render()
}

let newIndex
let editidDrink = $('#idDrink')
let editstrAlcoholic = $('#strAlcoholic')
let editstrCategory = $('#strCategory')
let editstrDrink = $('#strDrink')
function Edit(index) {
    $('.update-btn').css({display: 'block'})
    $('.add-btn').css({display: 'none'})
    let getData = JSON.parse(localStorage.getItem('cocktail'));

    for(let index1 in getData) {
        for(let index = 0; index < getData[index1].length; index++) {
            newIndex = index
            editidDrink.val() = getData[index1][index].idDrink
            editidDrink.focus()
            editstrAlcoholic.val() = getData[index1][index].strAlcoholic
            editstrAlcoholic.focus()
            editstrCategory.val() = getData[index1][index].strCategory
            editstrCategory.focus()
            editstrDrink.val() = getData[index1][index].strDrink
            editstrDrink.focus()
        }
    }
}

function update () {
    let getData = JSON.parse(localStorage.getItem('cocktail'));
    for(let index1 in getData) {
        getData[index1][newIndex] = {idDrink: editidDrink.val(), strAlcoholic: editstrAlcoholic.val(),
        strCategory: editstrCategory.val(), strDrink: editstrDrink.val()}
    }
    $('.closeModal').click()
    render()
}