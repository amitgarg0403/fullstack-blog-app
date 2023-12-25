import { useEffect, useState } from "react";

const MainPage = (props) => {
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

    return (
      <div className="container bg-transparent p-4">
        {
            posts.map((post, index)=>{
              if(props.postid === (index+1))
              return(
                <div className="row mt-4" key={index}>
                  <div className="col-lg-8 mt-5">
                    <h3 className="title">{post.title}</h3>
                    <h6 className="mt-4">Category : Science</h6>
                  </div>
                  <div className="col-lg-4">
                    <img src="logo192.png" alt="" />
                  </div>
                  <div className="col-lg-12">
                    <p>{post.body}</p>
                  </div>
                </div>)
            })
          }
      </div>
    );
  };
  
  export default MainPage;
  