var models = require("./models");
var User = models.User;
var Hobby = models.Hobby;


var dan = new User({
	first: "Daniel",
	last: "Moennich",
	email: "daniel@email.com"
});

dan.save().then(function (user) {
	console.log("User saved:", user);
}).then(null, function (error) {
	console.error("An error occured:", error.message);
});


var swim = new Hobby({
	name: "Swimming",
	level: "noob",
	owner: dan._id
});

swim.save().then(function (hobby) {
	console.log("hobby saved:", hobby);
}).then(null, function (error) {
	console.error(error);
});


Hobby.findOne({name: "Swimming"}).populate("owner").exec().then(function (theHobby) {
	console.log("Found hobby:", theHobby);
}).then(null, function (error) {
	console.error("find error:", error);
});


User.findDan().then(function (user) {
	console.log("Found dan!:", user);
});

