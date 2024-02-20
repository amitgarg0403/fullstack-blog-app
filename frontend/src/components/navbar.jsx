import { Link } from "react-router-dom";

const MyNav = () => {
  const logout =()=>{
    localStorage.clear();
    window.location.reload();
  }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
          <div className="container-fluid"><Link className="navbar-brand fw-semibold" to="/"> Blog-App</Link>
            <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/create"> Create </Link>
              </div>
              <div className="navbar-nav ms-auto">
                <Link className="nav-link text-warning" onClick={logout}> {localStorage.getItem("name")} - Logout </Link>
              </div>

            </div>
          </div>
        </nav>

    );
  };
  
  export default MyNav;
  