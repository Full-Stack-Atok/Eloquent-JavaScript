// let rabbit = {};
// rabbit.speak = (line) => {
//   console.log(`The rabbit says '${line}'`);
// };

// rabbit.speak("Im alive.");

// function speak(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// }

// let whiteRabbit = { type: "white", speak };
// let hungryRabbit = { type: "hungry", speak };

// whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// hungryRabbit.speak("I could use a carrot right now.");
// speak.call(hungryRabbit, "Burp");

// function normalize() {
//   console.log(this.coords.map((n) => n / this.length));
// }

// normalize.call({ coords: [0, 2, 3], length: 5 });

// let empty = {};
// console.log(empty.toString);
// console.log(empty.toString());

// console.log(Object.getPrototypeOf({}) == Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

// console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// console.log(Object.getPrototypeOf([]) == Array.prototype);

// let protoRabbit = {
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   },
// };

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEE!");

// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// }

// function Rabbit(type) {
//   this.type = type;
// }

// Rabbit.prototype.speak = function (line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };

// let weirdRabbit = new Rabbit("weird");

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

// let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// let object = new (class {
//   getWord() {
//     return "Hello";
//   }
// })();

// console.log(object.getWord());

// Rabbit.prototype.teeth = "small";
// console.log(killerRabbit.teeth);
// killerRabbit.teeth = "long, sharp, and bloody";
// console.log(killerRabbit.teeth);
// console.log(blackRabbit.teeth);
// console.log(Rabbit.prototype.teeth);

// console.log(Array.prototype.toString == Object.prototype.toString);
// console.log([1, 2].toString());

// let ages = {
//   Boris: 39,
//   Liang: 22,
//   Julia: 62,
// };

// console.log(`Julia is ${ages["Julia"]}`);
// console.log(`Is Jack's age known?`, "Jack" in ages);
// console.log(`Is toString's age known?`, "toString" in ages);

// console.log("toString" in Object.create(null));

// let ages = new Map();
// ages.set("Boris", 39);
// ages.set("Liang", 22);
// ages.set("Julia", 62);

// console.log(`Julia is ${ages.get("Julia")}`);
// console.log(`Is Jack's age known?`, ages.has("Jack"));
// console.log(ages.has("toString"));

// console.log({ x: 1 }.hasOwnProperty("x"));
// console.log({ x: 1 }.hasOwnProperty("toString"));

Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));

let sym = Symbol("name");
console.log(sym == Symbol("name"));

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};

console.log([1,2]. toString());
console.log([1,2][toStringSymbol]());
