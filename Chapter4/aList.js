let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: {
        value: 4,
        rest: null,
      },
    },
  },
};

// arrayToList = (arr) => {
//   newlist = null;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     newlist = { value: arr[i], rest: list };
//   }
//   return newlist;
// };
// console.log(arrayToList([1, 2, 3]));

// listToArray = (list) => {
//   let arr = [];

//   while (list !== null) {
//     arr.push(list.value);
//     list = list.rest;
//   }
//   return arr;
// };

// console.log(listToArray(list));

const prepend = (value, list) => {
  return {
    value: value,
    rest: list,
  };
};

const myList = prepend(0, list);
console.dir(myList, { depth: null });

nth = (list, n) => {
  let count = 0;
  while (list !== null) {
    if (count === n) return list.value;
    list = list.rest;
    count++;
  }
};

console.log(nth(list, 3));

nthRecursive = (list, n) => {
  if (list === null) return undefined;
  if (n === 0) return list.value;
  return nthRecursive(list.rest, n - 1);
};
console.log(nthRecursive(list, 3));
