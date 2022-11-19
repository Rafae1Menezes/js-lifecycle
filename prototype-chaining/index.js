const assert = require("assert");

// criando objetos literais
const obj = {};
const arr = [];
const fn = () => {};

//Internamente objetos literais viram funções explícitas
//Number() String() Function() Object()

assert.deepStrictEqual(new Object().__proto__, {}.__proto__);

// __proto__ é a referencia do objeto que possui as propriedades nele
assert.deepStrictEqual(obj.__proto__, Object.prototype);

// o __proto__ de Objet.prototype é null
assert.deepStrictEqual(obj.__proto__.__proto__, null);

console.log("--------------");
// como criavamos objetos no JS antes de chegar as classes no js

function Employee() {}
Employee.prototype.salary = () => "salary**";

function Supervisor() {}
// Criando uma heranã do employee
Supervisor.prototype = Object.create(Employee.prototype);
console.log(Supervisor.prototype.salary());
Supervisor.prototype.profitShate = () => "profiShare**";
console.log(Supervisor.prototype.profitShate());

function Manager() {}
Manager.prototype = Object.create(Supervisor.prototype);
Manager.prototype.monthBonuses = () => "mounthBonuses**";
console.log(Manager.prototype.profitShate());
console.log(Manager.prototype.salary());
console.log(Manager.prototype.monthBonuses());

// S nao chamar o 'new', o primeiro __proto__ vai ser sempre a instancia d Function, sem herdar
// Para acessar as classes sem o ew, pode acessar direo via prototype
assert.deepStrictEqual(Manager.prototype.__proto__, Supervisor.prototype);

console.log("---------");

//Quando chamamos o o new, o __proto__ recebe o prototype
assert.deepStrictEqual(Supervisor.prototype, new Manager().__proto__.__proto__);

console.log("---------");

// o new não tras todos para o mesmo prototype, mas como o new js procura em todos os prototypes
const manager = new Manager();
console.log(manager.salary());
console.log(manager.profitShate());
console.log(manager.monthBonuses());

assert.deepStrictEqual(manager.__proto__, Manager.prototype);
assert.deepStrictEqual(manager.__proto__.__proto__, Supervisor.prototype);
assert.deepStrictEqual(
  manager.__proto__.__proto__.__proto__,
  Employee.prototype
);
assert.deepStrictEqual(
  manager.__proto__.__proto__.__proto__.__proto__,
  Object.prototype
);
assert.deepStrictEqual(
  manager.__proto__.__proto__.__proto__.__proto__.__proto__,
  null
);

console.log("----------------------");

class T1 {
  ping() {
    return "ping";
  }
}

class T2 extends T1 {
  pong() {
    return "pongo";
  }
}

class T3 extends T2 {
  shoot() {
    return "shoot";
  }
}

const t3 = new T3();

assert.deepStrictEqual(
  t3.__proto__.__proto__.__proto__.__proto__.__proto__,
  null
);
