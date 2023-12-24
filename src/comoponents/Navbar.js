
import React from "react";
import { Link } from "react-router-dom";



const Navbar = (props)=> {
  

  
    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            QuickNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/business">
                Business
              </Link>
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
              <Link className="nav-link" to="/general">
                General
              </Link>
              <Link className="nav-link" to="/health">
                Health
              </Link>
              <Link className="nav-link" to="/science">
                Science
              </Link>
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </ul>

            
          </div>

          
        </div>
        
        

      </nav>
    </div>
    )
  }


export default Navbar
