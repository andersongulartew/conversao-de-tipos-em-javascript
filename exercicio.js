// 1) Converta o número 123.456 para uma string e depois para um inteiro.
// 2) O que acontece quando você tenta somar um booleano com um número? Experimente com diferentes valores.
//  3) Utilize coerção para converter uma string contendo "false" em um valor booleano. Como você faria isso?


// **** 1)
// const num = 123.456;

// const num2 = num.toString(); //numero em string
// console.log(typeof num2);

// const num3 = parseInt(num2); // string em numero inteiro
// console.log(num3);
// console.log(typeof num3);

//////////////////////////////////////////////////////////////

// **** 2)
// let resultado1 = true + 5; //true é convertido em 1
// console.log(resultado1);

// let resultado2 = false + 5;  //false é convertido em 0
// console.log(resultado2);

///////////////////////////////////////////////////////////////

// **** 3)
let text = "false";

let text1 = Boolean(text);
console.log(text1);
console.log(typeof text1)







