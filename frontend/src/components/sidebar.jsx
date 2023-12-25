import { useEffect, useState } from "react";

const SideBar = (props) => {
  const [posts, setPost] = useState([])
  const getPost = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(postArr=>{
      setPost(postArr);
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
                <p className="fst-italic mt-1">Science </p>
                <small>{(post.body).substring(0,50)}....</small>
              </div>
            )
          })
        }
      </div>
    );
  };
  
  export default SideBar;
  