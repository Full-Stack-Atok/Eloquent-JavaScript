// countChars = (string, char) => {
//   let count = 0;
//   let chars = 0;

//   for (let i = 0; i <= string.length - 1; i++) {
//     if (string[i] === char) {
//       count++;
//     }
//     chars++;
//   }
//   return console.log(`Uppercase ${char}: ${count} and Characters: ${chars}`);
// };

// countBs = (string) => {
//   return countChars(string, "B");
// };

// countBs("BBBBaaaa");

// minimumNum = (num1, num2) => {
//   return console.log((result = Math.min(num1, num2)));
// };

// minimumNum(1, 5);

// printEven = (endpoint) => {
//   startPoint = 0;
//   while (startPoint <= endpoint) {
//     if (startPoint % 2 === 0) {
//       console.log(`${startPoint} is even.`);
//     } else {
//       console.log(startPoint);
//     }
//     startPoint++;
//   }
// };

// printEven(100);

// capitalize = (word) => {
//   return console.log(word.charAt(0).toUpperCase() + word.slice(1));
// };

// capitalize("hello");

// object = {
//   name: "Sherwin Kerby F. Atok",
//   age: 2,
// };
// console.log("Hello " + object.name);
// console.log("Your age is " + object.age);

// let arr = [1, 2, 3, 4, 5, 6];

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null,
//     },
//   },
// };
// sum = arr.reduce((acc, curr) => {
//   console.log(curr + acc);
//   return curr + acc;
// }, 0);

// listToArray = (list) => {
//   let arr1 = [];
//   while (list !== null) {
//     arr1.push(list.value);
//     list = list.rest;
//   }
//   return arr1;
// };

// repeat = (n, action) => {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// };

// repeat(3, console.log);

// let labels = [];

// repeat(5, (i) => {
//   labels.push(`Unit ${i + 1}`);
// });

// console.log(labels);

// greaterThan = (n) => {
//   return (m) => m > n;
// };

// let greaterThan10 = greaterThan(10);

// console.log(greaterThan10(11));

// countBy = (items, groupName) => {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex((c) => c.name === name);
//     if (known === -1) {
//       counts.push({ name, count: 1 });
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// };

// console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

// let nums = [5, 12, 8, 20, 3];

// greaterThan10 = (arr) => {
//   let great = arr.filter((n) => n > 10);
//   return great;
// };

// console.log(greaterThan10(nums));

// let nums1 = [3, 6, 9];

// const doubled = (arr) => arr.map((n) => n * 2);

// console.log(doubled(nums1));

// let nested = [
//   [1, 2],
//   [3, [4, 5]],
//   [6, [7, 8]],
// ];

// deepLevel = (arr) => {
//   return arr.reduce((acc, curr) => {
//     if (Array.isArray(curr)) {
//       acc = acc.concat(deepLevel(curr));
//     } else {
//       acc = acc.concat(curr)
//     }
//     return acc;
//   }, [])
// }

// console.log(deepLevel(nested));
