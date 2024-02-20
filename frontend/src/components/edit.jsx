import { useEffect, useState } from "react";
import axios from "axios";

const EditPost = () =>{
    const [message, updateMessage] = useState("");
    const [error, updateError] = useState("");
    const [title, updateTitle] = useState("");
    const [category, updateCategory] = useState("CHOOSE");
    const [img, updateImg] = useState("");
    const [body, updateBody] = useState("");


    const edit = ()=>{
        let editId = localStorage.getItem("editItem")
        let url = "http://localhost:5000/edit/"+editId;
        axios.get(url)
        .then(response=>{
            console.log(response.data);
            updateTitle(response.data.title);
            updateImg(response.data.img);
            updateCategory(response.data.category);
            updateBody(response.data.body);
        })
        .catch(err=>{console.log(err)})
    }

    const updatePost = async() =>{
        if(title === "" || category === "CHOOSE" || body === ""){
            updateError("Except Image, One of the Field is Empty!")
        }else{
            let editId = localStorage.getItem("editItem")
            let url = "http://localhost:5000/update/"+ editId;
            let updatePost = { title: title, category: category, img: img, body: body};
            await axios.put(url, updatePost)
            .then(response=>{
                updateMessage("Update Successfully!")
                window.location.href = "/";
            })
            .catch(err=>console.log(err))
        }
    }

    useEffect(()=>{ edit()},[1])

    return(
        <div className="row">
        <div className="col-lg-3"></div>

        <div className="col-lg-6">
            <div className="container bg-warning rounded-4 shadow p-4 pe-4 mt-5 mb-4">
                <h2 className="text-center text-danger mb-3"> Edit Blog Post </h2>
                <p className="text-center text-success fst-italic fs-6"> {message}</p>
                <p className="text-center text-danger fst-italic fs-6"> {error}</p>

                <div className="row">
                    <div className="col-lg-3 mt-3">
                        <h5 className="text-start text-danger ms-3"> Title :</h5>
                    </div>
                    <div className="col-lg-9 mt-3">
                        <input type="text" className="form-control" 
                        onChange={obj=>{updateTitle(obj.target.value)}} value={title}/>
                    </div>
                </div>  

                <div className="row">
                    <div className="col-lg-3 mt-3">
                        <h5 className="text-start text-danger ms-3"> Category :</h5>
                    </div>
                    <div className="col-lg-9 mt-3">
                    <select name="category" className="form-control" onChange={obj=>{updateCategory(obj.target.value)}}
                        value={category}>
                            <option >CHOOSE</option>
                            <option>Science</option>
                            <option>Arts</option>
                            <option>Fashion</option>
                            <option>Motivational</option>
                            <option>Food</option>
                            <option>Business</option>
                            <option>News</option>
                            <option>Politics</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>  

                <div className="row">
                    <div className="col-lg-3 mt-3">
                        <h5 className="text-start text-danger ms-3"> Description :</h5>
                    </div>
                    <div className="col-lg-9 mt-3">
                        <textarea name="" className="form-control" cols="30" rows="6" 
                        onChange={obj=>{updateBody(obj.target.value)}} value={body}></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 mt-3">
                        <h5 className="text-start text-danger ms-3"> Image(opt) :</h5>
                    </div>
                    <div className="col-lg-9 mt-3">
                        <input type="text" className="form-control" onChange={obj=>{updateImg(obj.target.value)}} 
                        value={img} placeholder="Enter Image URL only"/>
                    </div>
                </div>  

                <div className="row"> 
                    <div className="col-lg-12 mt-3 text-center">
                        <button className="btn btn-danger btn-lg m-2" onClick={updatePost}> Update </button>
                        <button className="btn btn-danger btn-lg m-3" onClick={()=>window.location.href="/"}> Cancel </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-3"></div>
    </div>
   
);
    
}

export default EditPost;