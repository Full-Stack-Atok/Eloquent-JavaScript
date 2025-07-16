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

let arr = [1, 2, 3, 4, 5, 6];

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};
sum = arr.reduce((acc, curr) => {
  console.log(curr + acc);
  return curr + acc;
}, 0);

listToArray = (list) => {
  let arr1 = [];
  while (list !== null) {
    arr1.push(list.value);
    list = list.rest;
  }
  return arr1;
};

sumAll = listToArray(list).map((x) => {
  x.reduce((curr, acc) => {
    console.log(curr + acc);
    return curr + acc;
  });
});
