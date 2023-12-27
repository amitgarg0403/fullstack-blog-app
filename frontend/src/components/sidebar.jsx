import { useEffect, useState } from "react";
import axios from "axios";

const SideBar = (props) => {
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

  const display = (post)=>{
    props.clickedId(post.id)
  }
  
    return (
      <div className="bg-light pt-1 p-3">
        {
          posts.map((post,index)=>{
            return(
              <div className="row side-item pb-1" onClick={display.bind(this,post)} key={index}>
                <h5>{(post.title).substring(0,30)}...</h5>
                <p className="fst-italic mt-1">Cat. - Science </p>
                <small>{(post.body).substring(0,50)}....</small>
              </div>
            )
          })
        }
      </div>
    );
  };
  
  export default SideBar;
  