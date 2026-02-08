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

readPosts();