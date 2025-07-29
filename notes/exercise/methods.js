let person = {
  name: "Shiela",
  age: 22,
};

person.introduce = function () {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
};

person.introduce();

let company = {
  name: "CodeTech",
  location: "Manila",
  founder: {
    name: "Sherwin",
    introduce: function () {
      console.log(
        `Hi, I'm ${this.name}, founder of CodeTech based in ${company.location}`
      );
    },
  },
};

company.founder.introduce();

let car = {
  brand: "Ford",
  model: "Everest",
  start: function () {
    console.log(`Starting ${this.brand} ${this.model}`);
  },
  stop: function (driverName) {
    console.log(
      `Driver ${driverName} has stopped the ${this.brand} ${this.model}`
    );
  },
};

car.start();
car.stop("Sherwin");

let calculator = {
  value: 0,
  history: [],

  set(a) {
    this.value = a;
    this.history.push(`Set to ${a}`);
    return this;
  },

  add(b) {
    this.value += b;
    this.history.push(`Added by ${b}`);
    return this;
  },

  minus(b) {
    this.value -= b;
    this.history.push(`Minus by ${b}`);
    return this;
  },

  multiply(b) {
    this.value *= b;
    this.history.push(`Multiply by ${b}`);
    return this;
  },

  divide(b) {
    this.value /= b;
    this.history.push(`Divided by ${b}`);
    return this;
  },

  get() {
    console.log(`${this.value}`);
    return this;
  },

  reset() {
    this.history.length = 0;
    return this.history;
  },
};

calculator.set(10).add(5).multiply(2).get();
console.log(calculator.history);
calculator.set(10).add(5).multiply(2).get().reset();
console.log(calculator.history);
