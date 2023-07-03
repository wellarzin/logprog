// elabore em javascript um programa que leia o nome e a senha do funcionário utilizando prompt, repetindo a pergunta da senha até que seja a certa, no caso (1234) e informe quantas vezes o funcionário errou a senha

const prompt = require('prompt-sync')();

const nome = prompt("Digite seu usuário: ");

let senha
let tentativas = 0
do {
    senha = Number(prompt("Digite sua senha: "));
    if(senha === 1234){
        console.log("Você logou, bla bla bla!");
        console.log("-".repeat(30));
        console.log("Você errou a senha " + tentativas + " vezes");
    }else {
        tentativas++
        console.log("Senha errada, tente outra!");       
    }
} while (senha !== 1234);
