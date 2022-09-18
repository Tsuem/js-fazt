const user = {
    name: 'Nako',
    lastname: 'Moto',
    age: 1,
    address: {
        country: 'Argentina',
        city: 'Cordoba',
        street: 'Main Street 123'
    },
    friends: ['Maxi', 'Momo', 'Trixie'],
    active: true,
    sendMail: function () {
        return 'sending email...'
    }
}

console.log(user.name);
console.log(user.address.city);