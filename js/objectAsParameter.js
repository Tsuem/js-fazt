const user = {
    name: 'Joe',
    age: 20
}

function printInfo(user) {
    return '<h2>Hola ' + user.name + '</h2>'
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user)