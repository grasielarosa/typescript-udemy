/*
Aula 03 - Typescript
vídeo - 258 - aula 3 no git
type void
*/

/*
O tipo void quer dizer que uma função ou método não retorna nada.
Ler mais: https://www.typescripttutorial.net/typescript-tutorial/typescript-void-type/
*/

function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}
const pessoa = {
  nome: "luiz",
  sobrenome: "Otávio",

  exibirNome(): void{
    console.log(this.nome + ' ' + this.sobrenome);
  }
 };

semRetorno('Luiz', 'Otávio')
pessoa.exibirNome();

export{ pessoa };
