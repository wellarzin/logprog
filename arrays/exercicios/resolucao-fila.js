let fila = [];
let opcao = "";

do{
    let pacientes = "";
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"; 
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes + 
        "\nEscolha uma ação: \n1. novo paciente\n2. consultar paciente\n3. sair"
    )

    switch(opcao){
        case "1":
            const novo = prompt("Qual o nome do paciente? ")
            fila.push(novo);
            break;
        case "2":
            const consultado = fila.shift();
            alert(consultado + " foi removido da fila.");
            break;
        case "3":
            alert("Até mais!");
            break;
        default:
            alert("Opção inválida!");
        }
}while(opcao !== "3")