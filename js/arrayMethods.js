const names = ['Nako', 'Maxi', 'Momo']

/* for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
} */


/* names.forEach(function(name) {
    console.log(name);
}) */


//retorna un array
const newNames = names.map(function(name) {
    return `Hola ${name}`
})

console.log(newNames);



const newNames2 = names.find(function(name) {
    if (name === 'Joe')
    return name
})

console.log(newNames);