let titulo = 
document.getElementById("titulo")
console.log(titulo.innerText)

titulo.innerText = "ola,Dev!"
console.log(titulo.innerText)
 
let container = document.getElementById("container")
container.innerHTML = "<h2>Olá, Mundo! </h2><p>Lorem ipsum</p>"

let container2 = document.getElementById("container")
container2.innerHTML = "<h2>Ola, mundo </h2>"
container2.className = "row"

let paragrafo = document.getElementById("p");
paragrafo.innerHTML = "<h2>Hello Wolrd!</h2>";
document.body.append(paragrafo);

let pai = document.getElementById("pessoas")
let pessoas = ["Homer" , "Marge", "Lisa", "Maggie"];
for (const pessoas of pessoas);{
    let li = document.createElement("li");
    li.innerHTML = pessoas;
    pai.append(li);
}

const produtos = [
    {id: 1,nome:"Arroz", preco: 20 },
    {id: 2,nome:"Macarrão", preco: 5 },
    {id: 3,nome:"Pão", preco: 1 },
    {id: 4,nome:"Pudim", preco: 10 },    
];
for (const produtos of produtos) {
    let container = document.getElementById("Div");
    container.innerHTML =   "<h3> ID: " + produtos.id + "</h3>"
                            "<p> Produto: " +produtos.nome + "</p>" +
                            "<b> R$" +produtos.preco +  "</b> <br><br>"
    document.body.append(container);
}