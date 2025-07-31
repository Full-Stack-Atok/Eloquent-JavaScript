// const personMap = new Map();

// personMap.set("name", "Sherwin");
// personMap.set("age", 23);
// personMap.set("isStudent", true);

// console.log(personMap);
// console.log(personMap.get("name"));

const contacts = new Map();

contacts.set("Alice", "0917");
contacts.set("Bob", "0998");

contacts.delete("Bob");
console.log(contacts.has("Bob"));
console.log(contacts.size);

const products = new Map();

products.set("Laptop", 50000);
products.set("Bag", 450);
products.set("Napkin", 8450);
products.set("Shoes", 8500);

for (const [key, value] of products) {
  console.log(`Product: ${key}, Price:${value}`);
}

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCounts = new Map();

for (let i = 0; i < fruits.length; i++) {
  if (!fruitCounts.has(fruits[i])) {
    fruitCounts.set(fruits[i], 1);
  } else {
    newCount = fruitCounts.get(fruits[i]) + 1;
    fruitCounts.set(fruits[i], newCount);
  }
}

console.log(fruitCounts);
