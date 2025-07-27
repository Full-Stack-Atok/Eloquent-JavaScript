/*
The Sum of a Range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.

As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used when building the array.
If no step is given, the elements go up by increments of one, corresponding
to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5,
7, 9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/

range = (start, end, step) => {
  let arr = [];

  if (step === null || step === 0) {
    step = start <= end ? 1 : -1;
  }

  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(range(5, 2, -1));

sum = (arr, n) => {
  if (n <= 0) {
    return 0;
  }

  return sum(arr, n - 1) + arr[n - 1];
};

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(arr, arr.length));
