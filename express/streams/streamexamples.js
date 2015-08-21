var http = require("http");


// request is a http.IncomingMessage which is a Readable Stream
// all stream are EventEmitter (listeners can be registered for specific events)
// response is a writable stream
// express() creates a function object which can be used as a callback function for http.createServer
// it takes a request and a response object (streams) from http.createServer on every incoming request
// the request and response objects available in app.use, app.get are wrapper for http.IncomingMessage and
// the corresponding http writable stream for response
// all methods available on the http streams are available on the request/response objects passed by express






var server = http.createServer(function (request, response) {
	response.write("the msg: " + request.query.msg);
	response.write(" - hello");
	response.end();


});

server.listen(3000);
console.log("The server is listening.");

