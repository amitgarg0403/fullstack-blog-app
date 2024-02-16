
const CriteriaBlock = (props) => {

    return(
        <div className="container-fluid">
            <div className="row bg-warning p-1">
                <div className="col-lg-5 col-md-5 col-5">
                    <h6 className="d-inline">Sort :</h6>
                    <button className="btn btn-light btn-sm ms-3" onClick={props.onSortClick}> 
                        <i className="fa-solid fa-clock-rotate-left fa-lg"></i> 
                    </button>
                </div>

                <div className="col-lg-7 col-md-7 col-7 text-end">
                    <h6 className="d-inline ms-2">Filter :</h6>
                    <select name="category" className="ms-3 bg-light rounded-1 border-0 p-1 fw-semibold"
                        onChange={obj=>props.onFilterClick(obj.target.value)}>
                        <option>All</option>
                        <option value="Science">Science</option>
                        <option value="Arts">Arts</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Business">Business</option>
                        <option value="News">News</option>
                        <option value="Politics">Politics</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CriteriaBlock;