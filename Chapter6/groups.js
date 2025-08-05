/**
🧠 What You Need to Do (Simplified):
You're making your own version of Set, but calling it Group.

It will:

🧺 Store unique values (no duplicates allowed).

👷 Use methods to:

✅ add(value) → only if it’s not already inside.

❌ delete(value) → if it exists, remove it.

❓ has(value) → check if it's in the group.

🛠️ Use a constructor that starts with an empty group.

🏗️ Provide a static method called from(iterable) that:

Takes an array or any list-like thing.

Loops over it and adds each value to your group (ignoring duplicates).

🔨 Technical Concepts You Must Use:
Concept	Layman's Explanation
constructor()	Starts your group with nothing inside ([]).
add()	Only adds if it’s not already there (check with indexOf or includes).
delete()	Removes the value (hint: use splice() after finding the index).
has()	Checks if it exists, returns true or false.
static from()	Like a factory method — takes something like [1, 2, 3] and returns a new Group with those values added.
 */

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    try {
      if (this.members.includes(value)) {
        console.log(`Duplicate values found!`);
      } else {
        this.members.push(value);
      }
    } catch (error) {
      console.log(`Error in 'add' method:`, error.message);
      return error;
    }
  }

  delete(value) {
    try {
      for (let i = 0; i < this.members.length; i++) {
        if (this.members[i] === value) {
          this.members.splice(i, 1);
        }
      }
    } catch (error) {
      console.log(`Error in 'delete' method`);
      return error;
    }
  }

  has(value) {
    try {
      return this.members.includes(value);
    } catch (error) {
      console.log(`Error in 'has' method`);
      return error;
    }
  }

  [Symbol.iterator]() {
    let i = 0;
    let self = this;

    return {
      next() {
        if (i < self.members.length) {
          return { value: self.members[i++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }

  static from(iterable) {
    try {
      let group = new Group();
      for (let key of iterable) {
        group.add(key);
      }
      return group;
    } catch (error) {
      console.log(`Error in 'from' method`);
      return error;
    }
  }
}

const group = Group.from([10, 20, 30, 40, 50, 50]);
console.log(group.members);
group.add(20);
group.delete(30);
console.log(group.has(30));

let group1 = Group.from(["hello", "world"]);

for (let value of group1) {
  console.log(value);
}
