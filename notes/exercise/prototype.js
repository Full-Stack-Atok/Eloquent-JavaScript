// let animal = {
//   type: "Animal",
//   sound: "A generic sound",
//   speak() {
//     console.log(`The ${this.type} makes a ${this.sound}`);
//   },
// };

// animal.speak();

// let dog = Object.create(animal);

// dog.speak();

// dog.type = "dog";
// dog.sound = "Arf Arf";

// dog.speak();

// vehicle = {
//   move() {
//     console.log("The vehicle moves forward.");
//   },
// };

// car = Object.create(vehicle);

// car.wheels = 4;

// sportsCar = Object.create(car);

// sportsCar.move = function () {
//   console.log("The sports car zooms  past!");
// };

// vehicle.move();
// car.move();
// sportsCar.move();

let machine = {
  powered: true,
  powerOn() {
    console.log("Machine is now ON.");
  },
};

let vehicle = Object.create(machine);
vehicle.wheels = 4;
vehicle.move = function () {
  console.log("The vehicle is moving.");
};

let car = Object.create(vehicle);
(car.brand = "Toyota"),
  (car.drive = function () {
    console.log(`Driving a ${this.brand} with ${this.wheels} wheels`);
  });

car.drive(); // Driving a Toyota since this is in this object scope // with 4 wheels inherited from vehicle // wheels
car.move(); //The vehicle is moving // inherited from vehicle object
car.powerOn(); // Machine is now ON // inherited from the parents itself
