const prompt = require('prompt-sync')()

const x = Number(prompt("Informe o primeiro numero: "))
const y = Number(prompt("Informe o segundo numero: "))

const soma = x + y
const sub = x - y 
const mult = x * y
const div = x / y

console.log(`
    ${soma}
    ${sub}
    ${mult}
    ${div.toFixed(2)}
`);
