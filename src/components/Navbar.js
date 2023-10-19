import React,{useEffect} from 'react'
import {Link,useLocation} from "react-router-dom";
import {useNavigate} from 'react-router-dom';


function Navbar() {
  let navigate = useNavigate();

 const handelLogOut = () => {
      localStorage.removeItem('token');
      navigate("/login");


 }
  let location = useLocation();
  useEffect(() =>{
    console.log(location.pathname);

  } , [location]);
  return (

    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">CloudNotes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
        </li>
        </ul>
      {!localStorage.getItem('token') ? <form className="d-flex" role="search">
      <Link to="/login" className="btn btn-primary btn-lg active mx-2" role="button" aria-pressed="true">Login</Link>
      <Link to="/signup" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">sign up</Link>
      </form> : <button onClick={handelLogOut} className='btn btn-primary' >Log-Out</button>}
    </div>
  </div>
</nav>
  )
}

export default Navbar