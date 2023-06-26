const prompt = require('prompt-sync')()

const palavra = prompt("Indique uma palavra: ")

let invertida = []

for (let i = palavra.length - 1; i >= 0; i--) {
      invertida += palavra[i]
}

if (palavra == invertida) {
    console.log(palavra + " é um palíndromo!");
}else{
    console.log(palavra + " ---- " + invertida +
    `\n${palavra} não é um palíndromo!`
    );
}