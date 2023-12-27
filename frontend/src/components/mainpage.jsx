import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = (props) => {
  const [posts, setPost] = useState([])
  const getPost = () =>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>{
      setPost(response.data);
    })
  }

  useEffect(()=>{
    getPost();
  },[]);

    return (
      <div className="container bg-transparent p-4">
        {
            posts.map((post, index)=>{
              if(props.postid === (index+1))
              return(
                  <div className="row mt-4" key={index}>
                    <div className="col-lg-8 mt-5">
                      <h3 className="title">{post.title}</h3>
                      <h6 className="mt-5">Category : Science</h6>
                    </div>
                    <div className="col-lg-4">
                      <img src="logo192.png" alt="" />
                    </div>
                    <div className="col-lg-12 mt-3">
                      <p>{post.body}</p>
                    </div>
                  </div>
                )
            })
          }
      </div>
    );
  };
  
  export default MainPage;
  