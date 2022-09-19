const background = 'blue'
const color = 'white'
const isAuthorized = true;

const button = document.createElement("button");
button.innerText = "click me";
button.style = 'background: ; color: white;'
button.style = `background: ${isAuthorized ? background : 'red'}; color: ${color}`

button.addEventListener('click', () => {
    if (isAuthorized){
        return alert('Welcome!')
    }

    alert('You are not authorized to enter')
})

document.body.append(button)