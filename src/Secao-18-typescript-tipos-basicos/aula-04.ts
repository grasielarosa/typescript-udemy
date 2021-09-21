/*
Aula 04 - Typescript
vídeo - 259 - aula 4 no git
type object
*/

/* const objA= {
  chaveA: "valor A",
  chaveB: "valor B",
}

aqui, o typeScript já inferiu o type string para o objeto.

objA.chaveA = 'outro valor';
objA.chaveC = 'isso eu não posso fazer, porque essa chave não existe no objeto.';
*/

const objA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; //para eu poder criar uma chave depois
} = {
  chaveA: "valor A",
  chaveB: "valor B",
};

//objA.chaveA = "já não posso alterar a chave porque é read-only";
objA.chaveC = "nova chave";
objA.chaveD = "mais uuma chave nova";

/*
esses objetos tão abertos não devem ser usados. É uma solução para um api que realmente não saiba o que é, porém sempre como última solução.
*/

console.log(objA)
