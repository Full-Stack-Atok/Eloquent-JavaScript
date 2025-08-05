let map = {
  one: true,
  two: true,
  hasOwnProperty: false,
};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
console.log(Object.prototype.hasOwnProperty.call(map, "hasOwnProperty"));


