const heading = document.createElement('h1')
heading.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
button.innerText = 'click here'

button.addEventListener('click', function(){
    console.log('Hola Mundo');
    heading.innerText = 'Texto actualizado desde JS'
})

document.body.append(heading)
document.body.append(button)