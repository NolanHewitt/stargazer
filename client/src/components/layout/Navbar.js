import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function() {
  return (
    <div className="navbar-fixed">
      <nav className="N/A transparent">
        <div className="nav-wrapper">
          <Link
            to="/"
            style={{ fontFamily: "Star Jedi"
            }}
            className="col s5 brand-logo center white-text"//WORKING ON GETTING THIS TO SPARKLE!!
          >Star-Gazer
          </Link>
        </div>
      </nav>
    </div>
  );
}
