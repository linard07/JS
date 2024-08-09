const btnCriar = document.querySelector("#btnCraiar");
const listaFilmes = document.querySelector("listaFilmes");
const inputUsuario = document.querySelector("inputUsuarios");
const inputAno = document.querySelector("inputAno");
const inputDiretor = document.querySelector("inputDiretor");

const filmes = [
    {
        nome: "Vingadores: Ultimato",
        ano: 2019,
        diretor: "Anthony Russo, Joe Russo"
    },
];

renderizarNaTela();

btnCriar.addEventListener('click', function (event)  {
    event.preventDefault();
    criarFilme();
});

function criarFilme(){
    const novoFilme = {
        nome: inputUsuario.value,
        ano: inputAno.value,
        diretor: inputDiretor.value
    };
    filmes.unshift(novoFilme);
    renderizarNaTela();
}
function renderizarNaTela(){
    listaFilmes.innerHTML=""

    filmes.forEach(filmes => {
        const novoFilme = document.createElement('li');
        novoFilme.innerHTML = `
            <h1>${filmes.nome}</h1>
            <p>${filmes.ano}</p>
            <h3>${filmes.diretor}</h3>
            <button onclick="editarFilme(${filmes.indexOF(filmes)})">Editar</button>
            <button onclick="apagarFilme(${filmes.indexOF(filmes)})">Apagar</button>
        `;
        listaFilmes.appendChild(novoFilme);
    });
}

function editarFilme(idFilme){
    const novoNome = prompt('Digite o novo filme', filmes[idFilme].nome);
    filmes[idFilme].nome = novoNome;
    renderizarNaTela();
}

function apagarFilme(idFilme) {
    filmes.splice(idFilme,1);

    renderizarNaTela();
}