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
// mongoose.connect("mongodb://127.0.0.1:27017/BlogDB")
mongoose.connect("mongodb+srv://admin:admin@cluster0.spskcbu.mongodb.net/blogDB")
.then(console.log("MongoDb connected"))
.catch((err)=>{console.log(err)})

//----------------  CRUD Routes  -------------------

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
        body: req.body.body,
        userId: req.body.userId
    })
    await Blog.create(newEntry)
    .then(result=> console.log("New Post created"))
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
    await Blog.find(req.params)
    .then(response=>{ 
        res.send(response); 
    })
    .catch(err=>console.log(err))
})

// Delete Post Data
app.delete("/deldata/:id", async(req,res)=>{
    let id = req.params.id;
    await Blog.findByIdAndDelete(id)
    .then(response=>{
        console.log("Post Deleted")
        res.sendStatus(200);
    })
    .catch(err=>console.log(err))
})

// Edit Post Data
app.get("/edit/:_id", async(req,res)=>{
    let editId = req.params;
    await Blog.findById(editId)
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>console.log(err))
})

app.put("/update/:_id", async(req,res)=>{
    let editId = req.params;
    let updateData = req.body;
    console.log(editId)
    await Blog.findByIdAndUpdate(editId, updateData )
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>console.log(err))
})

// -------------User Routes--------------

// Register
app.post('/newuser', async(req,res)=>{
    await User.create(req.body)
    .then(response=>{
        res.sendStatus(201);
    })
    .catch(err=>console.log(err))
})

// Login
app.post('/login', async(req,res)=>{
    let userEmail = req.body.email;
    await User.findOne({email: userEmail})
    .then(response=>{
        console.log(response);
        if(response == null)
        {res.send(null)}
        else 
        {res.send(response)}
    })
    .catch(err=>{console.log(err)
    })
})


app.listen(5000, ()=>{
    console.log("Server running at port 5000");
})