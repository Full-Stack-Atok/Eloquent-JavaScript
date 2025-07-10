let counter = 1;

while (counter <= 100) {
  if (counter % 3 === 0 && counter % 5 === 0) {
    document.getElementById("output").innerHTML += `${counter} FizzBuzz <br>`;
  } else if (counter % 3 == 0) {
    document.getElementById("output").innerHTML += `${counter} Fizz <br>`;
  } else {
    document.getElementById("output").innerHTML += `${counter} Buzz <br>`;
  }
  counter++;
}
