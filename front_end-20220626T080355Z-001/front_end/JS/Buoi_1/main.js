var age 

console.log (3, age)

console.log (5,age)

var age = 1

console.log (7, age)

var username = 'Lai Huy Truong'

console.log (username)

var chat = "Cô giáo nói: 'Em làm rất tốt cố gắng phát huy nhé!'"

var chat = `Cô giáo nói: 'Em làm rất tốt cố gắng phát huy nhé!'
HS đáp: 'Em cảm ơn cô ạ!'`

console.log (chat)

var tinh = `${1 + 1}`

console.log (tinh)

var nv1 = 'Truong'
var nv2 = 'Hoa'

var chat = `
    ${nv1} noi: 'Cau rat xinh dep'
    ${nv2} dap: 'Hi cam on cau'
`

console.log (chat)

var user = {
    name: 'Truong',
    age: 18,
    password: 'faljdso312312',
    phone: '0310380913',
    address: 'Thanh Xuan - HN'
}

console.log (Object.keys(user))

console.log (43, user.age)

console.log (45, user['address'])

user['age'] = user['age'] + 3

console.log (49, user)

user.id = '0123910312312'

console.log (user)

delete user.password

console.log (user)

var list = ['kien', 'nam', 'trung', 'vu']

console.log (list[0])

list[6] = 'Truong'

console.log (list)

console.log (Object.keys(list))

console.log(list.length)

list.length = 2

console.log (list)

