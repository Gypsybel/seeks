var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

const fs = require("fs");
var projects = require("./projects"); //With let got error - SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.get("/projects", (req, res) => {
  res.send(projects);
});

app.post("/projects", (req, res) => {
  if(!req.body.projects) {
    res.status(404).send("You must send some projects for us to save them silly!");
    return;
  }

  projects = req.body.projects;
  res.send(projects);
});

app.listen(8000, function(){
  console.log("listening on port 8000");
})
