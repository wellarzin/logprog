const prompt = require('prompt-sync')()

// Array normal

let arr1 = [
    ["1º item",
    "2º item",
    "3º item"]
]


// array bidimencional

let arr2 = [
    ["1º item",
    "2º item",
    "3º item"],
    ["4º item",
    "5º item",
    "6º item"],
    ["7º item",
    "8º item",
    "9º item"],
]


// outro exemplo mais complexo

const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
  ]

// console.log(arr);
console.log(arr[0]);
console.log(arr[1][0]);
console.log(arr[2][1][1]);
