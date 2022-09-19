const person = {
    name: 'Taeyeon',
    address: {
        city: 'Seoul',
    },
    location: {}
}

// optional chaining --> ?, **si no existe el atributo me arroja undefined!
console.log(person.location?.city);