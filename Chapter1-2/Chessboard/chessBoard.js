const binding = 8;
let pattern = "";

for (let i = 1; i <= binding; i++) {
  let row = "";
  for (let y = 1; y <= binding; y++) {
    if ((i + y) % 2 === 0) {
      row += "#";
    } else {
      row += " ";
    }
  }
  pattern += row + "<br>";
}

document.getElementById("output").innerHTML = pattern;
