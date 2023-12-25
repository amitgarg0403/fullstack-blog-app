import { useState } from "react";
import MainPage from "./components/mainpage";
import SideBar from "./components/sidebar";

const MyLayout = () => {
  let[pid, setPid] = useState(""); //saving id from sidebar

  const clickedId= async (id)=>{
   setPid(id)
  }

    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 p-0">
                <SideBar clickedId={clickedId}/>
            </div>
            <div className="col-lg-9 p-0">
                <MainPage postid={pid} />
            </div>
        </div>
        
      </div>
    );
  };
  
  export default MyLayout;
  