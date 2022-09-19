//biblioteca fetch que permite poner una dirección de internet
//jsonplaceholder --> nos permite tener datos de ejemplo en formato json

const ul = document.createElement("ul")

/* fetch('https://jsonplaceholder.typicode.com/posts')  //me devulve una promesa
    .then(function (response) {  //cuando acabe la carga hacete esta función
        return response.json()
    }).then(function (data) {
        data.forEach(function (post) {
            const li = document.createElement("li");
            li.innerText = post.title;
            ul.append(li);
        });
        document.body.append(ul);
    }) */


async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    
    data.forEach(function (post) {
        const li = document.createElement("li");
        li.innerText = post.title;
        ul.append(li);
    });
    document.body.append(ul);
}

loadData()