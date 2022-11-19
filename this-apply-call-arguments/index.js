"use strict";

const {
  watch,
  promises: { readFile },
} = require("fs");

class File {
  watch(event, filename) {
    console.log("this", this);
    console.log("arguments", Array.prototype.slice.call(arguments));
    this.showContent(filename);
  }

  async showContent(filename) {
    console.log((await readFile(filename)).toString());
  }
}

// watch(__filename, async (event, filename) => {
//   console.log(await (await readFile(filename)).toString());
// });

const file = new File();

// dessa forma, ele ignora o 'this' da classe File
// herda o this do watch

//Uma alternativa feia para isso não acontecr é usar uma arrow function
//watch(__filename, (event, filename) => file.watch(event, filename));

//podmos deixar explícito qual contexto essa função vai ter
// o bind vai subistituir o this de dentro dessa função pra quando ela for chamanda,
// ou seja o bind retorna uma nova função
// sempre que for delegar uma função, para que outra execute, sempre passar o .bind com o contexto desejado para o this de dentro dela
// o bind retorna uma função com o this qque se mantem de file, ignorando o watch
//watch(__filename, file.watch.bind());

// chama a funçã watch, passa os argumentos e implementa this
file.watch.call(
  { showContent: () => console.log("call: hey sinon!") },
  null,
  __filename
);

// igual ao .call() mas os argumentos sao passados por array
file.watch.apply({ showContent: () => console.log("call: hey sinon!") }, [
  null,
  __filename,
]);

//arguments é uma palavra chave que pega todos os argumentos passados para a função, mas é considerado uma má prátca.
