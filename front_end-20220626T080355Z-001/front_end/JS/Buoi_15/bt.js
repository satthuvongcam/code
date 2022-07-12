
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