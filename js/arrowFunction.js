//ejemplo 1
const add = (x, y) => {
    return x + y
}


//ejemplo 2
const button = document.createElement('button')
button.innerText= 'click me'

button.addEventListener('click', () => {
    alert('clicked')
})

document.body.append(button)