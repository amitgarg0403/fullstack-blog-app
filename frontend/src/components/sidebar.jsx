import { useEffect, useState } from "react";
import axios from "axios";

const SideBar = (props) => {
  const [posts, setPost] = useState([]);
  const [sort, setSort] = useState(false);


  const getPost = () =>{
    let userid = localStorage.getItem("id")
    console.log(userid);
    let url = "http://localhost:5000/getdata/"+userid;
    axios.get(url)
    .then(response=>{
      console.log(response.data)
      if(sort === true)
      setPost(response.data.reverse());
      else
      setPost(response.data);
    })
    .catch(err=>console.log(err))
  }
  
  useEffect(()=>{ 
    setSort(prev=>!prev)
    getPost();
  },[props.showSort]);
  
  const mainDisplay = (post)=>{
    props.clickedId(post._id)
  }

  const delPost = async(id)=>{
    await axios.delete("http://localhost:5000/deldata/"+id)
    .then(response=>{
      getPost();
    })
    .catch(err=>console.log(err))
  }
  
    return (
      <div className="bg-light pt-1 p-3">
        {
          posts.map((post,index)=>{
            if(props.showFilter === "All" || props.showFilter === post.category )
            return(
              <div className="row side-item pb-1" onClick={mainDisplay.bind(this,post)} key={index}>
                <div className="col">
                <h5 className="mb-0 mt-1 d-inline-block text-truncate" style={{maxWidth: "250px"}}>{post.title}</h5>
                <p className="fst-italic mt-1"> {post.category} </p>
                <small className="d-inline-block text-truncate" style={{maxWidth: "250px"}}>{post.body}</small>
                </div>
                <div className="col-lg-1 p-1 me-3" onClick={(e) => e.stopPropagation()}>
                  <button className="btn btn-sm trash" onClick={()=>{delPost(post._id)}}><i className="fa fa-trash fa-lg"></i></button>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  };
  
  export default SideBar;
  