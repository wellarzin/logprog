const prompt = require('prompt-sync')();

const arr = ["Bruno", "Sam", "Murilo", "Mega", "Leo", "Rafael", ];

console.log(arr);

// Adicionando arrays
// push (final do array)
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// unshift
tamanho = arr.unshift("Gandalf");
console.log(arr);
console.log(tamanho);

// Removendo arrays
// pop (final do array)
let last = arr.pop();
console.log(arr);
console.log(last);

// shift (começo do array)
last = arr.shift();
console.log(arr);
console.log(last);

// pesquisar por um elemento
// includes (saber se algum elexemnto existe no array)
const inclui = arr.includes("Sam");
console.log(inclui);

// indexOf (saber a posição de um elemento)
const indice = arr.indexOf("Sam");
console.log(indice);

// Cortar e Concatenar arrays
// slice (salva uma parte de um array e retorna um novo array)
const hobbits = arr.slice(0, 3);
const outros = arr.slice(-3); // pega os três ultimos elementos (conta de trás pra frente)
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat (concatena dois arrays)
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituindo elementos de um array
// splice (substitui elementos de um array)
const a = sociedade.splice(indice, 1, "galadriel");
console.log(sociedade);
console.log(a);

// Iterar sobre os elementos de um array
for (let i = 0; i < sociedade.length; i++) {
    const elemento = sociedade[i];
    console.log(elemento + " se encontra na posição " + (i + 1));
}