/*
🧠 What is a Vector?
Imagine a vector as a simple arrow pointing from the center of a graph (0, 0) to a point in space (x, y).
It has:

Direction (where it points)

Magnitude (how long it is)

🎯 What You’re Being Asked To Do:
Create a class called Vec

It will represent a 2D vector (with an x and a y value).

Think of it like a point in space or an arrow from the origin to that point.

Store values:

When you create a new Vec, give it x and y values.

Save those to properties: this.x and this.y.

Add two methods:

plus: this should take another vector and add its x and y to your vector’s x and y, returning a new vector.

minus: like plus, but instead subtract the values.

Example idea:
If v1 = (1, 2) and v2 = (2, 3), then v1.plus(v2) → (3, 5)

Add a getter called length:

This should return the distance from (0, 0) to the vector’s point.

You’ll use the Pythagorean theorem: √(x² + y²)


*/

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const v1 = new Vector(1, 2);
const v2 = new Vector(2, 3);

const v3 = v1.add(v2);
const v4 = v1.minus(v2);

console.log(v3);
console.log(v4);
console.log(v3.length);
