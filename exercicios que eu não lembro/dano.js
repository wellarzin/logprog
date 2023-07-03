const prompt = require('prompt-sync')()

const atacante = prompt("Qual o nome do atacante? ")
const ataque = Number(prompt("Qual seu dano? "))

const defensor = prompt("Qual o nome do defensor? ")
let vida = Number(prompt("Pontos de vida: "))
const defesa = Number(prompt("Defesa: "))
let escudo = prompt("Possui escudo? ")

let dano 
if (ataque > defesa && escudo == "nao"){ 
    dano = ataque - defesa
}else if (ataque > defesa && escudo == "sim"){
    dano = (ataque - defesa) / 2
}else {
    dano = 0
}

vida -= dano 

if (vida > 0){
    console.log(`O ${defensor} levou ${dano} de dano e ficou com ${vida} de vida.`);
}else {
    console.log(`O ${defensor} levou ${dano} de dano e acabou falecendo.`);
}