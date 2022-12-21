const http = require("http");
let fs = require("fs");

let Your_Name = "Neelesh Kumar Singh";

fs.writeFile(
  "index.html",
  `<h1>Hello World</h1>
  <p>This is ${Your_Name}...</p>`,
  (err) => {
    console.log(err);
  }
);

let serv = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end()
  });
});

serv.listen(5000, () => {
  console.log("server started");
});
