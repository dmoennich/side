var express = require("express");
var swig = require("swig");

var app = express();

// Rendering setup
app.engine("html", swig.renderFile);
app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.set("view cache" ,false);

//Routes
app.use(require("./routes"));

app.listen(3000);



