// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   get area() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const c = new Circle(3);
// console.log(c.area);

// class Temperature {
//   constructor(celsius) {
//     this._celsius = celsius;
//   }

//   get fahrenheit() {
//     return (this._celsius * 9) / 5 + 32;
//   }

//   set fahrenheit(f) {
//     this._celsius = ((f - 32) * 5) / 9;
//   }
// }

// const temp = new Temperature(0);
// console.log(temp.fahrenheit);

// temp.fahrenheit = 212;
// console.log(temp._celsius);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const a = new Point(0, 0);
const b = new Point(3, 4);

console.log(Point.distance(a, b));
