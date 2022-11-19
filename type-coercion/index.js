9999999999999999; //10000000000000000
true + 2; // 3
"21" + true; // 21true
"21" - true; // 20
"21" - -1; // 22
0.1 + 0.3 === 0.3; // false
3 > 2 > 1; // false
3 > 2 >= 1; // true
"B" + "a" + +"a" + "a"; // BaNaNa

// == Loose equality operator, realiza coerção de valor
// ===  Strict equality  oparator

// -------------------------------

console.assert(String(123) === "123", "explicit convertion to string");
console.assert(123 + "" === "123", "implicit convertion to string");
console.assert("hello" || 123 === "hello", "|| return the first element");
console.assert("hello" && 123 === 123, "&& return the last element");

// ----------------------------

const item = {
  name: "Rafael Menezes",
  age: 34,

  // string: 1 se nao for primiivo, chama o valueOf
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  // number: 1 se nao for primiivo, chama o toString
  valueOf() {
    return 3;
  },

  [Symbol.toPrimitive](coercionType) {
    console.log("Trying to convert to", coercionType);
    const types = {
      string: JSON.stringify(this),
      number: "007",
    };

    return types[coercionType] || types.string;
  },
};

console.log("toString", String(item));
console.log("valueOf", Number(item));
console.log("valueOf", new Date(item)); // chma a coersao default

console.assert(
  item + 0 === '{"name":"Rafael Menezes","age":34}0',
  "deve chamar symbol primitive, default, e retornar types.string"
);

console.log("!!item is true?", !!item);
