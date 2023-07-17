const prompt = require('prompt-sync')();

let lista = ["Matheus", "Bruno", "Sam", "Murilo", "Mega", "Leo", "Rafael", "Boromir", "Gandalf"];

for (let i = 0; i < lista.length; i++) {
    const posicao = i + 1;
    const paciente = lista[i];
    console.log("Paciente " + posicao + ": " + paciente);
}

do{
    const perguntaNovoPaciente = prompt("Deseja adicionar mais algum paciente? (S/N) ").toUpperCase();
    if(perguntaNovoPaciente == "S"){
        const novoPaciente = prompt("Digite o nome do paciente: ");
        lista.push(novoPaciente); 
    }else{
        break
    }
}while(true)

console.log("-".repeat(30));
console.log("Nova lista: ");
for (let i = 0; i < lista.length; i++) {
    const posicao = i + 1;
    const paciente = lista[i];
    console.log("Paciente " + posicao + ": " + paciente);
}