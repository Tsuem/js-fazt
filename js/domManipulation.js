const heading = document.createElement('h1')
heading.innerText = 'Hello from JS'

const button = document.createElement('button')
button.innerText = 'click here'

button.addEventListener('click', function(){
    console.log('Hello World');
    heading.innerText = 'Updated text from JS'
})

document.body.append(heading)
document.body.append(button)