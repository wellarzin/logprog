// dado um vetor de valores de jantares de clientes de um restaurante, ler o valor do couvert cobrado em uma determinada noite e criar uma outra lista com os valores dos jantares acrescidos do couvert 

const prompt = require('prompt-sync')();    

let jantares = [75.00, 62.50, 49.80, 82.90, 61.50];

const couvert = Number(prompt("Qual o valor do couvert? "));

let final = jantares.map(final => final + couvert)

console.log("-".repeat(30));
console.log("Jantares R$: " + jantares.join(", "));
console.log("-".repeat(30));
console.log("Couvert R$: " + couvert);
console.log("-".repeat(30));
console.log("Final R$: " + final.join(", "));