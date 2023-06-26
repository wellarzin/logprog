const prompt = require('prompt-sync')()

const nome = prompt("Qual seu nome? ")
const sobreNome = prompt("Qual seu Sobrenome? ")
const estudo = prompt("Campo de estudo: ")
const anoDeNascimento = Number(prompt("Quando nasceu? "))

const idade = 2023 - anoDeNascimento

console.log(`${nome + " " + sobreNome}, estuda em ${estudo}, ${idade} anos.`);
