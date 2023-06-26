const prompt = require('prompt-sync')()

const num = Number(prompt("Me diga um número: "))

let multiplicacao
let resultado = []

for (let i = 1; i <= 20; i++) {
    multiplicacao = num * i;
    resultado.push(multiplicacao);
}

console.log("-".repeat(40));
console.log(resultado.join(", "));
console.log("-".repeat(40));