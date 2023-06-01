const http = require(`http`);
var fs = require("fs");

const express = require("express");
const app = express();

app.set("view engine", "ejs");

/* const server = http.createServer((req, res) => {
  if (req.url === `/`) {
    //res.write(`hello world`);
    // res.end();
    fs.readFile(`index.html`, function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  } else if (req.url === `/about`) {
    //  res.write(JSON.stringify([1, 2, 3]));
    //res.end();
    fs.readFile("about.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": `text/html` });
      res.write(data);
      return res.end;
    });
  } else if (req.url === `/contact-me`) {
    //    res.write(JSON.stringify([1, 2, 3]));
    // res.end();
    fs.readFile("contact-me.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": `text/html` });
      res.write(data);
      return res.end;
    });
  } else {
    fs.readFile("404.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
    //    res.write("ERROR 404");
    // res.end();
  }
});
 */
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact-me", (req, res) => {
  res.render("contact-me");
});

app.listen(3000, () => {
  console.log("example app listening on port 3000");
});

/* server.listen(3000, () => {
  console.log("Listeninig on port  3000.....");
});
 */
