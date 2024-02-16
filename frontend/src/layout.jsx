import { useState } from "react";
import MainPage from "./components/mainpage";
import SideBar from "./components/sidebar";
import CriteriaBlock from "./components/criteriablock";

const MyLayout = () => {

  let[pid, setPid] = useState(""); //saving id from sidebar for display in main
  let[filter, setFilter] = useState("All"); //saving filter category from criteria block
  let[sort, setSort] = useState(false); //saving sort  from criteria block

  // this function transfer data from sidebar to main page via layout(what post clicked for display)
  const clickedId= (id)=>{
   setPid(id);
  }

  // this function transfer data from criteria to sidebar via layout (how to filter)
  const filterCat = (category)=>{
    setFilter(category);
  }

  // this function transfer data from criteria to sidebar via layout (how to sort)
  const sortBlog = ()=>{
    setSort(prevValue=> !prevValue);

  }

    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-lg-push-3 p-0">
                <CriteriaBlock onFilterClick={filterCat} onSortClick={sortBlog} />
                <SideBar clickedId={clickedId} showFilter={filter} showSort={sort}/>
            </div>
            <div className="col-lg-9 col-lg-pull-9 p-0">
                <MainPage postid={pid} />
            </div>
        </div>
        
      </div>
    );
  };
  
  export default MyLayout;
  