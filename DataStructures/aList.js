arrayToList = (arr) => {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
};

console.log(arrayToList([1, 2, 3]));

list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

listToArray = (list) => {
  let i = 0;
  let arr = [];

  while (list !== null) {
    arr[i] = list.value;
    list = list.rest;
    i++;
  }

  return arr;
};

console.log(listToArray(list));


