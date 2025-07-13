reverseArray = (arr) => {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
};

arr = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(arr));

reverseInPlace = (arr) => {
  for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
};

arr1 = [1, 2, 3, 4, 5];
reverseInPlace(arr1);
console.log(arr1);
