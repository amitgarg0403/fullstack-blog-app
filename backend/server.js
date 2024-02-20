const express = require('express')
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Blog = require("./models/blog")
const User = require("./models/user")

// Middlewares
app.use(cors());
    // Bodyparser for application/json
app.use(bodyParser.json())
    // Bodyparser for application/ form url-extended
app.use(bodyParser.urlencoded({extended:true}));



// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/BlogDB")
// mongoose.connect("mongodb+srv://admin:admin@cluster0.spskcbu.mongodb.net/blogDB")
.then(console.log("MongoDb connected"))
.catch((err)=>{console.log(err)})


//  Home route "http://localhost:5000"
app.get('/',(req,res)=>{
    res.sendStatus(200)
})

//  Create Post route
app.post("/create", async(req,res)=>{
    console.log(req.body)
    const newEntry = new Blog({
        title: req.body.title,
        category: req.body.category,
        img: req.body.img,
        body: req.body.body,
        userId: req.body.userId
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

app.get("/getdata/:userId", async (req,res)=>{
    console.log(req.params)
    await Blog.find(req.params)
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


// User Routes
app.post('/newuser', async(req,res)=>{
    console.log(req.body)
    await User.create(req.body)
    res.sendStatus(200);
})

app.post('/login', async(req,res)=>{
    let userEmail = req.body.email;
    await User.find({email: userEmail})
    .then(response=>{
        console.log("from Backend-" + response)
        res.status(200).send(response);
    })
    .catch(err=>{
        res.status(400).json({error:"User Not Found"})
    })
})

// (Should filter method apply to backend or frontend ? )
// for big data on backend, small data then frontend


app.listen(5000, ()=>{
    console.log("Server running at port 5000");
})