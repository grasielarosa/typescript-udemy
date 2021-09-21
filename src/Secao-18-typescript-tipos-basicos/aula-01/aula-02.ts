/*
Aula 02 - Typescript
vídeo - 257 - aula 2 no git
type any
*/

/*
any é um tipo que não vamos querer ter em nossos códigos, em resumo é um type sem type ou qualquer type.

function showMessage(msg) {
  return msg;
}

essa função recebe msg, e o typeScript não consegue identificar o tipo, então coloca como any. Isso quer dizer que também está retornando any.
Se quisermos usar o any de maneira proposital, devemos declarar #msg: any# para deixar de marcar como erro.

* utilizar any apenas em último caso.

*/

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1,2,3]));
console.log(showMessage('olá!'));
console.log(showMessage(1));
