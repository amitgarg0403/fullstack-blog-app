const mongoose = require("mongoose");


// Mongoose Schema
const UserSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
});

// Mongoose Model
const User = mongoose.model("User", UserSchema);

module.exports = User;