const button = document.createElement('button');
button.innerText = 'click me';

const isAuthorized = true;

button.addEventListener('click', () => {
    if (isAuthorized){
        return alert('Welcome!')
    }

    alert('You are not authorized to enter')
})

document.body.append(button)