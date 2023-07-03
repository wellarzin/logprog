// elabore em javascript um programa que  leia com prompt um programa que leia 10 números, após isso solicite se o usuário deseja listar os números ímpares ou pares e exiba os números conforme a escolha

const prompt = require('prompt-sync')();

let numeros = []
let pares = []
let impares = []

for (let i = 0; i < 10; i++) {
    numeros.push(Number(prompt("Digite um número: ")));
}

pares = numeros.filter(numero => numero % 2 == 0)
impares = numeros.filter(numero => numero % 2 == 1)

const lista = prompt("Você quer listar os números ímpares ou pares? (I/P) ").toUpperCase();

if(lista == "P"){
    console.log("Números pares: \n" + pares.join("\n"));
}else{
    console.log("Números ímpares: \n" + impares.join("\n"));
}

