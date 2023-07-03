const prompt = require('prompt-sync')()

const nome = prompt("Qual seu nome? ")

let pergunta = prompt("Já visitou alguma cidade? ").toLowerCase()

let cidades = []

let numCidade = 0

while (pergunta == "sim"){
    if (pergunta == "nao"){
        break
    }
    const cidade = prompt("Qual o nome da cidade? ")
    cidades.push(cidade)
    numCidade += 1
    pergunta = prompt("Já visitou alguma outra cidade? ").toLowerCase()
}

console.log(nome + " visitou " + numCidade + " cidades, sendo elas:\n " + cidades);


