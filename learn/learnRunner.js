
// read in tasks from json
// select random tasks and combine them to test suite
// run testem on created test suite

var fs = require("fs");

var tasksJson = fs.readFileSync("./jsk.json", {encoding: "utf8"});

var tasks = JSON.parse(tasksJson);

tasks.forEach(function(task){
	console.log(task.title);
	console.log(task.category);
});









