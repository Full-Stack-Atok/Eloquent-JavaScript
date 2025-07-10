let counter = Number(prompt("Enter a number: "));
let output = "";

for (let i = 1; i <= counter; i++) {
  output += "#".repeat(i) + "<br>";
}

document.getElementById("output").innerHTML = output;
