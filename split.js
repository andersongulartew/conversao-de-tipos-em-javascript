// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array

// Exemplo 1

// const myString = "Melância";
// const splits = myString.split();

// console.log(splits);

//////////////////////////////////

// Exemplo 2

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);


const chars = str.split('');
console.log(chars[8]);     // esta contando letra po letras e retorna qual letra esta na posicao 8


const strCopy = str.split();
console.log(strCopy);


