// elabore em javascript um programa que  leia com prompt o nome de um produto e o número de etiquetas a serem impressas deste produto, e exibir as etiquetas com os nomes dos produtos, com 2 etiquetas por linha

const prompt = require('prompt-sync')();

const nome = prompt("Digite o nome do produto: ");
const etiquetas = Number(prompt("Digite o número de etiquetas a serem impressas: "));

console.log("Etiquetas: \n");
console.log("-".repeat(30));

for (let i = etiquetas; i > 0; i -= 2){
    if (i == 1){
        console.log(nome);
    }else{
        console.log(nome + " - " + nome);
    }
}

