//ejemplo de importación de modulos
import { add, multiply, active, points, title } from "./add.js";

console.log(add(10, 5));
console.log(multiply(10, 5));
console.log(active, points, title);



//ejemplo de objeto
const user = {
    name: 'Nako',  //properties
    lastname: 'Moto',
    age: 1,
    address: {
        country: 'Argentina',
        city: 'Cordoba',
        street: 'Main Street 123'
    },
    friends: ['Maxi', 'Momo', 'Trixie'],
    active: true,
    sendMail() {          //methods
        return 'sending email...'
    }
}

console.log(user.name);
console.log(user.address.city);
console.log(user.sendMail());