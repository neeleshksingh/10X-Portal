const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let studentArray = require("./InitialData");
const port = 8080;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/student", (req, res) => {
  res.json(studentArray);
});

app.get("/student/:id", (req, res) => {
  let x = studentArray.filter((data) => data.id == req.params.id);
  if (x.length != 0) {
    res.json(x);
  } else {
    res.status(404).send("404");
  }
});

app.post("/student", (req, res) => {
  if (
    req.body.name != undefined &&
    req.body.currentClass != undefined &&
    req.body.division != undefined
  ) {
    let id = Date.now();
    studentArray.push({
      id: id,
      name: req.body.name,
      currentClass: req.body.currentClass,
      division: req.body.division,
    });
    res.json({
      id: id,
      name: req.body.name,
      currentClass: req.body.currentClass,
      division: req.body.division,
    });
  } else {
    res.status(400).send("bad request");
  }
});

app.put("/student/:id", (req, res) => {
  console.log(req.params.id);
  let bool = true;
  studentArray.map((data) => {
    if (data.id == req.params.id) {
      bool = false;
      data.name = req.body.name;
      data.currentClass = req.body.currentClass;
      data.division = req.body.division;
      res.json({ name: req.body.name, currentClass: req.body.currentClass, division: req.body.division}
      );
    }
  });
  if (bool) {
    res.status(400).send("bad request");
  }
});

app.delete("/student/:id", (req, res) => {
  console.log(studentArray.length);
  let bool = true;
  for (let i = 0; i < studentArray.length; i++) {
    if (studentArray[i].id == req.params.id) {
      bool = false;
      studentArray.splice(i, 1);
    }
  }
  if (bool) {
    res.status(200).send("invalid id");
  } else {
    res.json(studentArray);
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
