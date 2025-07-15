/*
Deep Comparison
The == operator compares objects by identity. But sometimes you’d prefer to
compare the values of their actual properties.
Write a function deepEqual that takes two values and returns true only if
they are the same value or are objects with the same properties, where the
values of the properties are equal when compared with a recursive call to
deepEqual.
To find out whether values should be compared directly (use the ===
operator for that) or have their properties compared, you can use the typeof
operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a
historical accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the
properties of objects to compare them.

*/

list1 = {
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

list2 = {
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

deepEqual = (a, b) => {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    typeof a === null ||
    typeof b !== "object" ||
    typeof b === null
  ) {
    return false;
  }

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false
    }
  }
  return true
};

console.log(deepEqual(list1, list2));
