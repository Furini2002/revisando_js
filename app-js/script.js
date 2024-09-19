// console.log("hello");

// //console
// console.error("Este é um errro"); //aparece como um erro no console, em vermelho especifica a linha
// console.warn("Este é um aviso"); //aparece no console, com um aviso em amarelo etc
// console.log("uma mensagem")//utilizado para textos em comum

// //variaveis
// //metodo antigo
// var x = 10; //ignora o escopo em bloco, e podem ser acesados atpe fora do escopo
// //maneiras mais modernas
// let y = 15;
// const p = 56;  //declaraçã constantes, que não podem ser modificadas/ 

// console.log(x);


// //tipos de dados
// const name = "Lucas";
// console.log(name);
// console.log(typeof name);

// const shirtsQtd = 4;
// console.log(shirtsQtd);
// console.log(typeof shirtsQtd);

// const decimal = 4.5;
// console.log(decimal);
// console.log(typeof decimal);

// const isAproved = true;
// console.log(isAproved);
// console.log(typeof isAproved);

// const nulo = null;
// console.log(nulo);
// console.log(typeof nulo);

// //metodos de string
// const fullname = "Lucas de Lima Furini";
// console.log(fullname.length);

// const strignToArray = fullname.split(' ');
// console.log(strignToArray);
// console.log(fullname.toLocaleLowerCase());
// console.log(fullname.toLocaleUpperCase());
// console.log(fullname.indexOf('Lima'));
// console.log(fullname.slice(0,5));

// //MANIPULAÇÃO DE ARRAY
// const list = ['a', 'b', 'c', 'd', 'e'];

// console.log(list.length);
// console.log(list[2]);

// list[5] = 'f';

// console.log(list[list.length -1]);

// list.push('g'); //adiciona um elemento ao ultimo item da lista
// console.log(list);

// list.pop(); //remove o ultimo elemento da lista
// console.log(list);
 
// list.shift(); //remove o primeiro elemento da lista
// console.log(list);

// list.unshift('a1'); //adiciona um elemento ao primeiro lista
// console.log(list);

// //MANIPULANDO OBJETOS
// const product ={
//     name: 'Camisa',
//     price: '142',
//     sizes:['p', 'm']
// };

// console.log(product.name);
// console.log(product['name']);

// //destructing
// const {price, name} = product;

// console.log(price);
// console.log(name);

// //JASON - JAVASCRIPT OBJECT NATATION, o que é ?
// const dog = {
//     name: 'Dog',
//     age: 10
// };

// const jason = JSON.stringify(dog); //converteu para json
// console.log(jason);

// const obj = JSON.parse(json); //desconverteu de json para objeto

// // ESTRUTURAS CONDICIONAIS
// const a = 10;

// if (a > 8){
//     console.log("a é maior que 8")
// };

// const b = "Lucas";

// if (b === "João"){
//     console.log("O nome é João")
// } else if (b === "Lucas"){
//     console.log("O nome é Lucas")
// }

// //if ternario
// const somenumber = 10;

// let testingNumber = somenumber < 20 ? 'yes' : 'No';

// console.log(testingNumber);

// // estruturas d repetição - loop
// const myList = [1, 2, 3, 4, 5];
// let counter = 0;

// console.log(myList.length);

// while (counter < myList.length){
//     console.log('Imprimindo: ' + myList[counter]);
//     counter ++;
// };

// const mySecondList = ['a', 'b', 'c', 'd', 'e'];

// for(let counter = 0; counter < mySecondList.length; counter++){
//     console.log(`Imprimindo: ${mySecondList[counter]}`); //forma de concatenar template literals
// };

// //metodos de arrays -> repetição
// const names = ["Mateus", "joão", "Maria"];

// //para percorrer todo o array
// names.forEach(function(name){
//     console.log("O nome é: " + name);
// });

// //modifica arrays, cria um array nome com as modificações
// const modifiedNames = names.map(function(name){
//     if(name === "Mateus"){
//         return (name = "Sr. Mateus");
//     }else {
//         return name;
//     }
// });
// console.log(modifiedNames);

// //modifica um array por uma condição
// const bignumbers = [1, 2, 3, 4, 5, 10 , 100].filter(function(number){
//     return number >= 5;
// });
// console.log(bignumbers);

// const sumall = bignumbers.reduce(function(total, number){
//     return total + number;
// });

// console.log(sumall); //deu a soma do array com o filter = 115

// //FUNÇÕES
// function minhafuncao (){
//     console.log("olá")
// };
// minhafuncao();

// //arrow function -> uma função "ternario", como o if
// const arrowFunction = (a, b) => a+b;

// console.log(arrowFunction(2,3));3

//CLASSES

//DOM - DOCUMENTS OBJECT MODEL
const title = document.getElementById('title');
console.log(title);

// query selector
const sameTitle = document.querySelector('#title');
console.log(sameTitle);

const texts = document.querySelectorAll('.text');
console.log(texts);

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase());
});

//alteração de elementos
title.textContent = "Mudei o texto"; //altera textos

texts[0].innerHTML = '<span>Alteramos o HTML deste elemento</span>'; //altera o html

texts[1].style.backgroundColor = 'red';

texts[2].classList.add('my-class');
texts[2].classList.remove('text');

texts[3].remove();

// EVENTOS
const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    console.log("Clicou");
})