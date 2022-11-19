//Tipos de valor e tipos de referência

const { deepStrictEqual } = require("assert");

let counter = 0;
let counter2 = counter;
counter2++;

// o que acontece no contador2 nao acontece com o contador1, pois se trata de um valor primitivo
deepStrictEqual(counter, 0);
deepStrictEqual(counter2, 1);

const item = { counter: 0 };
const item2 = item;
item2.counter++;

// o contador do item e do item2 sao afetados juntos, pois se trata de um valor de referência
deepStrictEqual(item, item2);
