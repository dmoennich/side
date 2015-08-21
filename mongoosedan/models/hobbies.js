var mongoose = require("mongoose");



var hobbySchema = new mongoose.Schema({
	name: {type: String, required: true},
	level: {type: String, enum: ["noob", "med", "pro"]},
	owner: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

var Hobby = mongoose.model("Hobby", hobbySchema);

module.exports = Hobby;