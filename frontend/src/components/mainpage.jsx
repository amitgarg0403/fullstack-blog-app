import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = (props) => {
  const [posts, setPost] = useState([])
  const getPost = () =>{
    axios.get("http://localhost:5000/getdata")
    .then(response=>{
      console.log(response.data);
      setPost(response.data);
    })
  }

  useEffect(()=>{
    getPost();
  },[]);

    return (
      <div className="container bg-seconday p-4">
        {
            posts.map((post, index)=>{
              if(props.postid === (post._id))
              return(
                  <div className="row mt-4 ps-3" key={index}>
                    <div className="col-lg-8 mt-2">
                      <h1 className="title text-warning">{post.title}</h1>
                      <h6 className="mt-5">Category : {post.category}</h6>
                    </div>
                    <div className="col-lg-4">
                      <img src={post.img} alt="IMAGE NOT AVAILABLE" height={200} width={250}/>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <p>{post.body}</p>
                    </div>
                    
                      <div className="col-lg-8"></div>

                      <div className="col-lg-4 sticky-bottom text-end">
                        <h6 className="fst-italic">Created By :- {localStorage.getItem("name")}</h6>
                        <p className="text-secondary fst-italic">last update - {post.updatedAt}</p>
                      </div>
                    
                  </div>
                )
            })
          }
      </div>
    );
  };
  
  export default MainPage;
  