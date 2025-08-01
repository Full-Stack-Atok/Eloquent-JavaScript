// class WordSplitter {
//   constructor(text) {
//     this.text = text;
//   }

//   [Symbol.iterator]() {
//     const sentence = this.text.split(" ");
//     let i = 0;
//     return {
//       next() {
//         return i < sentence.length
//           ? { value: sentence[i++], done: false }
//           : { done: true };
//       },
//     };
//   }
// }

// const sentence = new WordSplitter("Time is an illusion");

// for (let word of sentence) {
//   console.log(word);
// }

// class EvenRange {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   [Symbol.iterator]() {
//     let from = this.start;
//     let to = this.end;

//     return {
//       next() {
//         while (from <= to) {
//           if (from % 2 === 0) {
//             let result = from;
//             from++;
//             return { value: result, done: false };
//           }
//           from++;
//         }
//         return { done: true };
//       },
//     };
//   }
// }

// const evens = new EvenRange(3, 12);

// for (let even of evens) {
//   console.log(even);
// }

class CharStream {
  constructor(text) {
    this.text = text;
  }

  [Symbol.iterator]() {
    let index = 0;
    let sentence = this.text;

    return {
      next() {
        if (index < sentence.length) {
          return { value: sentence[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const stream = new CharStream("Hello!");
for (char of stream) {
  console.log(char);
}
