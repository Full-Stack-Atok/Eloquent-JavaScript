const readline = require("readline");
const fs = require("fs");
const http = require("http");

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
/*fs.readFile("./files/start.txt", "utf-8", (error1, data1) => {
  console.log(data1);
  fs.readFile(`./files/${data1}.txt`, "utf-8", (error2, data2) => {
    console.log(data2);
    fs.readFile(`./files/append.txt`, "utf-8", (error3, data3) => {
      console.log(data3);
      fs.writeFile(
        `./files/output.txt`,
        `${data2}\n\n${data3}\n Date Created:\n\n${new Date()}`,
        () => {
          console.log("File written successfully");
        }
      );
    });
  });
});
console.log("Reading file....");*/

/* LECTURE 8: CODE EXAMPLE
*******************************
CREATING A SIMPLE WEB SERVER
*******************************/
const html = fs.readFileSync("./template/index.html", "utf-8");

// STEP 1: CREATE A SERVER
const server = http.createServer((request, response) => {
  let path = request.url;

  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.end("You are in home page");
  } else if (path.toLocaleLowerCase() === "/about") {
    response.end("You are in about page");
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.end("You are in contact page");
  } else {
    response.end("Error 404: Page not found!");
  }
});

// STEP 2: START THE SERVER
server.listen(8000, "127.0.0.1", () => {
  console.log("Server has started!");
});
