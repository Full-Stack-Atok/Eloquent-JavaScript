// class Range {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   [Symbol.iterator]() {
//     let from = this.start;
//     const to = this.end;

//     return {
//       next() {
//         return from <= to ? { value: from++, done: false } : { done: true };
//       },
//     };
//   }
// }

// const range = new Range(3, 7);

// for (let num of range) {
//   console.log(num);
// }

// const userId = Symbol("user-id");

// class UserId {
//   constructor(name, id) {
//     this.name = name;
//     this[userId] = id;
//   }

//   getId() {
//     return this[userId];
//   }
// }

// const user = new UserId("Shiela", 123456);

// console.log(user.name);
// console.log(user.getId());

// for (let key in user) {
//   console.log("KEY: ", key);
// }

// console.log(Object.keys(user));

// class SecretVault {
//   constructor(contents) {
//     this.contents = contents;
//   }

//   get [Symbol.toStringTag]() {
//     return Array.isArray(this.contents) ? "Array" : "Top Secret";
//   }
// }

// const vault = new SecretVault([1234]);

// console.log(Object.prototype.toString.call(vault));
