/*
Aula 01 - Typescript
vídeo - 256 - aula 1 no git
type annotation
*/

/* eslint-disable*/



// * Tipos básicos (aqui ocorre a inferência de tipos)
let nome: string = 'Grasiela';
let idade: number = 33;
let adulto: boolean = true;
let simbrolo: symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n;


// * Arrays
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeStrings: Array<string> = ['1','2','3'];
let arrayDeStrings2: string[] = ['1','2','3'];

// * Objetos
let pessoa: {nome: string, idade:number, adulto?: boolean, ensino?: string[]} = {
  idade: 33,
  nome: 'Grasiela',

}

// * Funções

const soma = (x: number, y: number) => {
  return x + y;
}

const result = soma(2,2); // aqui ele já infere o number

const soma2: (x: number, y: number) => number = (x,y) => x + y;

console.log(pessoa.nome);
console.log(arrayDeNumeros);



