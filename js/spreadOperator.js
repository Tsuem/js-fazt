//ejemplo con arrays
const names = ['Nako', 'Maxi', 'Momo']
const newNames = ['Karina', 'Winter', 'Giselle', 'Ningning']

console.log([...names, ...newNames]);


//ejemplo con objetos
const user = {
    name: "Yurina",
    lastname: "Kawaguchi",
    age: 23,
}

const address = {
    country: "Japan",
    city: "Miyazaki",
    street: "Main street 123"
}

const userInfo = {
    ...user,
    ...address
}