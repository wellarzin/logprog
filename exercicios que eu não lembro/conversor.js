const prompt = require('prompt-sync')()

const medida = Number(prompt("Qual o numero que deseja converter? "))

const unidade = prompt("Para qual unidade de medida deseja converter?" +
"\n1 - milímetros (mm)" +
"\n2 - centímetros (cm)" +
"\n3 - decímetros (dm)" +
"\n4 - decâmetros (dam)" +
"\n5 - hectômetro (hm)" +
"\n6 - quilômetro (km)"
)

switch (unidade) {
    case 1:
        console.log(`Resultado: + ${medida} + m =  + ${medida} * 1000 + mm`);
        break
    case 2:
        console.log(`Resultado: + ${medida} + m =  + ${medida} * 100 + cm`);
        break
    case 3:
        console.log(`Resultado: + ${medida} + m =  + ${medida} * 10 + dm`);
        break
    case 4:
        console.log(`Resultado: + ${medida} + m =  + ${medida} / 10 + dam`);
        break
    case 5:
        console.log(`Resultado: + ${medida} + m =  + ${medida} / 100 + hm`);
        break
    case 6:
        console.log(`Resultado: + ${medida} + m =  + ${medida} / 1000 + km`);
        break
    default:
        console.log("Opção Inválida.");
}