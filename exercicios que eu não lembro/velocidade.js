const prompt = require('prompt-sync')()

const carro1 = prompt("Qual o veículo? ")
const velo1 = Number(prompt("Qual a velocidade? "))

const carro2 = prompt("Qual o veículo? ")
const velo2 = Number(prompt("Qual a velocidade? "))

if (velo1 == velo2){
    console.log(`A velocidade dos carros são iguais.`);
}else if (velo1 > velo2){
    console.log(`O ${carro1} é mais rápido que o ${carro2}`);
}else { 
    console.log(`O ${carro2} é mais rápido que o ${carro1}`);
}

