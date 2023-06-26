const prompt = require('prompt-sync')()

let saldo = Number(prompt("Informe o seu saldo R$: "))

let opcao = ""

do {
    opcao = prompt(
        "Saldo disponível R$" + saldo + 
        "\n1. Adicionar dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Sair" +
        "\nEscolha uma opção: "
    )

    switch (opcao) {
        case "1":
            saldo += Number(prompt("Informe o valor a ser adicionado R$: "))
            break;
        case "2":
            saldo -= Number(prompt("Informe o valor a ser removido R$: "))
            break;
        case "3":
            console.log("Saindo....");
            break
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== "3");