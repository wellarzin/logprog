// dado um vetor de notas de alunos de uma turma, calcular e exibir a media das notas. apos, criar outra lista apenas com as notas que são maiores que esta média.

const prompt = require('prompt-sync')();    

let notas = [7.2, 6.0, 8.9, 9.5, 4.0, 8.2, 5.0]
console.log("Notas da turma: " + notas.join(", "));

let mediasoma = 0
notas.forEach(x => {mediasoma += x});
let media = mediasoma/notas.length
console.log(media.toFixed(2));

let acima = notas.filter(x => x >= media)
console.log("Notas acima da média: " + acima.join(", "));