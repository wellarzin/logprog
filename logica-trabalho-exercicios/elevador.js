// elabore em javascript um programa que  leia com prompt valores de saques de clientes em um terminal eletrônico, até ser digitado "0" para sair, sabendo que o terminal só dispõe de notas de 10,00, exiba uma mensagem dizendo se o saque é válido ou não, e ao final listar os saques disponíveis e após isso, os inválidos

const prompt = require('prompt-sync')();    

let saque
let saquesValidos = []
let saquesInvalidos = []

do {
    saque = Number(prompt("Digite o valor do saque: "));
    if(saque == 0){
        break
    }else if (saque % 10 == 0) {
        console.log("Saque válido!");
        saquesValidos.push(saque)
    }else{
        console.log("Saque inválido!");
        saquesInvalidos.push(saque)
    }
} while (saque !== 0);

console.log("-".repeat(30));
console.log("Saques válidos: \n" + saquesValidos.join("\n"));

console.log("-".repeat(30));
console.log("Saques inválidos: \n" + saquesInvalidos.join("\n"));
