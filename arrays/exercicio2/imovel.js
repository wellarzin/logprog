let opcao = "";

const imoveis = [];

do {
    opcao = prompt(
        "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
    );

    switch (opcao) {
        case "1":
            const imovel = {};

            imovel.proprietario = prompt("Informe o nome do proprietario do imóvel: ");
            imovel.quartos = prompt("Quantos quartos tem o imóvel? ");
            imovel.banheiro = prompt("Quantos banheiros tem o imóvel? ");
            imovel.garagem = prompt("O imóvel possui garagem? ")

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiro +
                "\nPossui Garagem? " + imovel.garagem
            )

            if(confirma){
                imoveis.push(imovel)
            }
            break

        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiro +
                    "\nPossui Garagem? " + imoveis[i].garagem
                  )                
            }

            break
        
        case "3":
            alert("Encerrando...");
            break;
    
        default:
            alert("Opção Inválida!");
            break;
    }
} while (opcao !== 3);
