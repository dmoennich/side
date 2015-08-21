var express = require("express");
var swig = require("swig");
var app = express();


// 4.
// use templates
swig.setDefaults({cache: false});
app.engine("txt", swig.renderFile);
//app.set("view engine", "txt"); // sets the default file type, when not specified in response.render

// 3.
// make use of Router
var myRouter = express.Router();

myRouter.get("/", function (request, response) {
	response.statusCode = 200;
	response.setHeader("Content-type", "text/plain");
	response.send("response from router!");
});

myRouter.get("/withtemplate", function (request, response) {
	response.render("default.txt", {name: "Daniel"});
});


app.use("/users", myRouter);

//2.b
// create a simple body parser middleware
var mySimpleTextBodyParser = function(request, response, next){
	request.setEncoding("utf8");
	var textBody = "";
	request.on("data", function (dataChunk) {
		textBody += dataChunk;
	});
	request.on("end", function () {
		request.body = textBody + " *** parsed by simple text body parser :) ***";
		next();
	});
};

app.use(mySimpleTextBodyParser);


// 2.a 
// create a request/response logger for http method, request path and response code
app.use(function(request, response, next){
	var startTime = Date.now();
	response.on("finish", function (){
		var stopTime = Date.now();
		var timeElapsed = stopTime - startTime;
		console.log(request.method, request.path, response.statusCode, timeElapsed, "ms");
	});
	next();
});

// 2.
// create route
app.get("/", function (request, response) {
	response.status(200);
	response.type("text/plain");
	response.send("Hello Daniel!");

});


app.get("/getpara", function (request, response) {
	var getParas = request.query;
	response.type("text/plain");
	response.status(200);
	response.send("The message: " + getParas.msg);
});


app.get("/urlparams/:number", function (request, response) {
	var prot = Object.getPrototypeOf(request);
	//prot = Object.getPrototypeOf(prot);
	//prot = Object.getPrototypeOf(prot);
	console.dir(prot);
	console.log("***********");
	console.dir("request: " + prot.on);

	var theNumber = request.params.number;
	response.type("text/plain");
	response.status(200);
	response.send("Received number was: " + theNumber);
});

app.post("/postwithbody", function (request, response) {
	response.statusCode = 201;
	response.send("Received body: " + request.body);
});





// 1.
// create server
// launch server
var server = app.listen(3000, function () {
	console.log("Listening on port", this.address().port, "for connections ...");
});

