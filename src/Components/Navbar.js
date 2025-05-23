import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//   import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  let location = useLocation();

  // useEffect(() => {
  //   console.log(location.pathname);;
  //    }, [location.pathname]);
  const handlelogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }


  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            INotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li> */}
            </ul>
            {!localStorage.getItem('token')?<form className="d-flex" role="search">
              <Link className="btn btn-primary mx-1" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">
                Signup
              </Link>
            </form> : <button type="button" className="btn btn-primary" onClick={handlelogout}>Logout</button> }
          </div>
        </div>
      </nav>
      {/* <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div> */}
    </>
  );
}
