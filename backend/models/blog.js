const mongoose = require("mongoose");


// Mongoose Schema
const BlogSchema = new mongoose.Schema({
    title : {type: String, required: true},
    category : {type: String, required: true},
    img : String,
    body : {type: String, required: true},
    userId : String
}, { timestamps : true });

// Mongoose Model
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;