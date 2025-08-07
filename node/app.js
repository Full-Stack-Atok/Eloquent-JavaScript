const readline = require("readline");
const fs = require("fs");

/* LECTURE 4: CODE EXAMPLE
*******************************
READING INPUT & WRITING OUTPUT
*******************************
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your name: ", (name) => {
  console.log("You entered:", name);
  rl.close();
});

rl.on("close", () => {
  console.log("Interface closed");
  process.exit(0);
});
*/

/* LECTURE 5: CODE EXAMPLE
*******************************
READING & WRITING TO A FILE
*******************************
let textIn = fs.readFileSync("./files/input.txt", "utf-8");
console.log(textIn);

let content = `Data read from input.txt: ${textIn} \nDate created: ${new Date()}`;

fs.writeFileSync("./files/output.txt", `${content}`, "utf-8");*/

/* LECTURE 7: CODE EXAMPLE
*******************************
READING & WRITING TO A FILE ASYNCHRONOUSLY
*******************************/
fs.readFile("./files/start.txt", "utf-8", (error1, data1) => {});
