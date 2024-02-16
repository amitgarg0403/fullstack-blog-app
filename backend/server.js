const express = require('express')
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Blog = require("./models/blog")

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


//  Home route "http://localhost:5000"
app.get('/',(req,res)=>{
    res.sendStatus(200)
})

//  Create Post route
app.post("/create", async(req,res)=>{
    const newEntry = new Blog({
        title: req.body.title,
        category: req.body.category,
        img: req.body.img,
        body: req.body.body
    })
    await Blog.create(newEntry)
    .then(result=> console.log("New Post created successfully"))
    .catch(err=>console.log(err))

    res.redirect("/")
})

//  Display Blog Data route
app.get("/getdata", async (req,res)=>{
    await Blog.find()
    .then(response=>{ 
        res.send(response); 
    })
    .catch(err=>console.log(err))
})

// Delete Post Data
app.delete("/deldata/:id", (req,res)=>{
    let id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(response=>{
        console.log("Post Deleted")
        res.sendStatus(200);
    })
    .catch(err=>console.log(err))
})

// (Should filter method apply to backend or frontend ? )
// for big data on backend, small data then frontend


app.listen(5000, ()=>{
    console.log("Server running at port 5000");
})