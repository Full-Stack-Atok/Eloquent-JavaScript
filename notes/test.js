let names = ["alice", "bob", "charlie"];

let first = names.map((f) => f.slice(0, 1).toUpperCase() + f.slice(1));

console.log(first);

let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 90 },
  { name: "Daisy", score: 70 },
];

let passed = students.filter((s) => s.score >= 75);
console.log(passed);

let products = [
  { name: "  Milk ", stock: 10 },
  { name: "Bread", stock: 0 },
  { name: "  Eggs  ", stock: 15 },
  { name: "Juice", stock: 0 },
];

let stocks = products
  .map((p) => ({
    name: p.name.trim().toLowerCase(),
    stock: p.stock,
  }))
  .filter((s) => s.stock != 0);

console.log(stocks);
