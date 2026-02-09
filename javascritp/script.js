// https://jsonplaceholder.typicode.com/posts

/* 
    Será necessário 2 etapas.
    1) Ler os posts e exibir na tela
    2) Adicionar os posts novos
*/

async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = "Carregando...";

    let response = await fetch('https://jsonplaceholder.typicode.com/posts'); // fazendo a requisição
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML = "";

        for(let i in json) {
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}}<hr></div>`;
            postArea.innerHTML += postHtml;
        }
    }else{
        postArea.innerHTML = 'Nenhum post para exibir';
    }
}

async function addNewPost(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    );

    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';

    readPosts();
}

document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if(title && body){
        addNewPost(title, body);
    }else{
        alert("Preencha todos os campos");
    }
});

readPosts();