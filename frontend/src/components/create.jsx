import { useState } from "react";
import axios from "axios";

const Create = () => {
    const [title, updateTitle] = useState("");
    const [category, updateCategory] = useState("CHOOSE");
    const [img, updateImg] = useState("IMAGE NOT AVAILABLE");
    const [body, updateBody] = useState("");
    const [message, updateMessage] = useState("");

    const createPost = async ()=>{
        let newPost = { title: title, category: category, img: img, body: body };
        console.log(newPost);
        
        let url = "http://localhost:5000/new";
        axios.post(url, newPost)
        .then(response=>{
            alert('Posted')
            console.log(response.data);
            updateTitle("");
            updateCategory("CHOOSE");
            updateBody("");
            updateImg("IMAGE NOT AVAILABLE");
            updateMessage("Thank You for Posting !");
        })
        .catch((err)=>{
            updateMessage("Something went Wrong!")
            console.log(err)
        })

    }


    return (
        <div className="row">
            <div className="col-lg-2"></div>

            <div className="col-lg-8">
            <div className="container bg-warning rounded-4 shadow p-4 pe-4 mt-5 mb-5">
            <h2 className="text-center text-danger mb-4">Create New Blog</h2>
            <p className="text-center text-success fst-italic fs-6"> {message}</p>

            <div className="row">
                <div className="col-lg-3 mt-4">
                    <h4 className="text-start text-danger ms-3"> Title :</h4>
                </div>
                <div className="col-lg-9 mt-4">
                    <input type="text" className="form-control" 
                    onChange={obj=>{updateTitle(obj.target.value)}} value={title}/>
                </div>
            </div>  

            <div className="row">
                <div className="col-lg-3 mt-4">
                    <h4 className="text-start text-danger ms-3"> Category :</h4>
                </div>
                <div className="col-lg-9 mt-4">
                   <select name="category" className="form-control" onChange={obj=>{updateCategory(obj.target.value)}}
                    value={category}>
                        <option >CHOOSE</option>
                        <option>Science</option>
                        <option>Arts</option>
                        <option>Fashion</option>
                        <option>Motivational</option>
                        <option>Business</option>
                        <option>News</option>
                        <option>Politics</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>  

            <div className="row">
                <div className="col-lg-3 mt-4">
                    <h4 className="text-start text-danger ms-3"> Description :</h4>
                </div>
                <div className="col-lg-9 mt-4">
                    <textarea name="" className="form-control" cols="30" rows="8" 
                    onChange={obj=>{updateBody(obj.target.value)}} value={body}></textarea>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 mt-4">
                    <h4 className="text-start text-danger ms-3"> Image(opt) :</h4>
                </div>
                <div className="col-lg-9 mt-4">
                    <input type="text" className="form-control" onChange={obj=>{updateImg(obj.target.value)}} placeholder="Enter Image URL only"/>
                </div>
            </div>  

            <div className="row">
                
                <div className="col-lg-12 mt-4 text-center">
                    <button className="btn btn-danger btn-lg m-2" onClick={createPost}> Create </button>
                    <button className="btn btn-danger btn-lg m-3" type="reset"> Reset </button>
                </div>
            </div>
        </div>
            </div>

            <div className="col-lg-2"></div>
        </div>
       
    );
  };
  
  export default Create;
  