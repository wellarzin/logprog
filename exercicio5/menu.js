let opcao = "0"

do {
    prompt(
        "Seja bem-vindo(a)\n" +
        "\nEscolha uma opção" +
        "\n1. Opção Um" +
        "\n2. Opção Dois" +
        "\n3. Opção Três" +
        "\n4. Opção Quatro" +
        "\n5. Encerrar" 
    )

    switch (opcao) {
        case "1":
            alert("Você escolheu a opção um.")
            break
        case "2":
            alert("Você escolheu a opção dois.")
            break
        case "3":
            alert("Você escolheu a opção três.")
            break
        case "4":
            alert("Você escolheu a opção quatro.")
            break
        case "5":
            alert("Você escolheu encerrar.")
            alert("Encerrando....")
            break
        default:
            alert("Opção inválida...")
    }
} while (opcao !== "5");