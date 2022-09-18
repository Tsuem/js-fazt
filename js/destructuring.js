const user = {
    name: 'Joe',
    age: 20
}

function printInfo(user) {
    const {name, age} = user

    console.log(name, age);
    return '<h2>Hola ' + name + '</h2>'
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user)