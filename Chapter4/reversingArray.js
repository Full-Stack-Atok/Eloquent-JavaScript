reverseArray = (arr) => {
  let reverse = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
};

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));

reverseArrayInPlace = (arr) => {
  for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
};
const arr1 = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arr1);
console.log(arr1);
