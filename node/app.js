//CORE MODULES
const readline = require("readline");
const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceHtml = require("./modules/replaceHtml");

// USER DEFINED MODULES

// THIRD PARTY MODULES / LIBRARIES

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
const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
const productListHtml = fs.readFileSync(
  "./template/product-list.html",
  "utf-8"
);
const productDetailsHtml = fs.readFileSync(
  "./template/product-details.html",
  "utf-8"
);

// STEP 1: CREATE A SERVER
// SERVER INHERITS FROM EVENTEMITTER
const server = http.createServer();

server.on("request", (request, response) => {
  let { query, pathname: path } = url.parse(request.url, true);

  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.writeHead(200, {
      "content-type": "text/html",
      "my-header": "Hello world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in Home page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.writeHead(200, {
      "content-type": "text/html",
      "my-header": "Hello world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in About page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.writeHead(200, {
      "content-type": "text/html",
      "my-header": "Hello world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in Contact page"));
  } else if (path.toLocaleLowerCase() === "/products") {
    if (!query.id) {
      let productsHtmlArray = products.map((prod) => {
        return replaceHtml(productListHtml, prod);
      });
      let productsResponseHtml = html.replace(
        "{{%CONTENT%}}",
        productsHtmlArray.join(",")
      );
      response.writeHead(200, { "content-type": "text/html" });
      response.end(productsResponseHtml);
    } else {
      let prod = products[query.id];
      let productDetailResponseHtml = replaceHtml(productDetailsHtml, prod);
      response.end(html.replace("{{%CONTENT%}}", productDetailResponseHtml));
    }
  } else {
    response.writeHead(404, {
      "content-type": "text/html",
      "my-header": "Hello world",
    });
    response.end(html.replace("{{%CONTENT%}}", "Error 404: Page not found"));
  }
});

// STEP 2: START THE SERVER
server.listen(8000, "127.0.0.1", () => {
  console.log("Server has started!");
});
