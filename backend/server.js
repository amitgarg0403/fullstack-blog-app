const express = require('express')
const bodyParser = require("body-parser")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");


// Middlewares
app.use(cors());
    // Bodyparser for application/json
app.use(bodyParser.json())
    // Bodyparser for application/ form url-extended
app.use(bodyParser.urlencoded({extended:true}));



// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/BlogDB")
.then(console.log("MongoDb connected"))
.catch((err)=>{console.log(err)})

// Mongoose Schema
const BlogSchema = new mongoose.Schema({
    title : {type: String, required: true},
    category : {type: String, required: true},
    img : String,
    body : {type: String, required: true},
}, { timestamps : true });

// Mongoose Model
const Blog = mongoose.model("Blog", BlogSchema);


//  Home route "http://localhost:5000"
app.get('/',(req,res)=>{
    res.send("Hello World")
})

//  Create Post route
app.post("/new",(req,res)=>{
    const newEntry = new Blog({
        title: req.body.title,
        category: req.body.category,
        img: req.body.img,
        body: req.body.body
    })
    newEntry.save();
    // Blog.create(newEntry)
    // .then(result=>console.log(result))
    // .catch(err=>console.log(err))
})


app.listen(5000, ()=>{
    console.log("Server running at port 5000");
})