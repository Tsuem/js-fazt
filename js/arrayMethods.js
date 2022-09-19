const names = ['Nako', 'Maxi', 'Momo']
const newNames = ['Karina', 'Winter', 'Giselle', 'Ningning']

console.log(names.concat(newNames));

/* for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
} */


/* names.forEach(function(name) {
    console.log(name);
}) */


//retorna un array/lista
const nameMapped = names.map(function(name) {
    return `Hola ${name}`
})

console.log(nameMapped);


//me busca en base a una condición y me retorna un solo valor
const nameFound = names.find(function(name) {
    if (name === 'Nako')
    return name
})

console.log(nameFound);


//me filtra en base a una condición y me retorna uno o varios valores en un array/lista
const nameFiltered = names.filter(function(name) {
    if (name !== 'Nako')
    return name
})

console.log(nameFiltered);