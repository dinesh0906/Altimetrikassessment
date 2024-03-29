import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <h3>Front-End Technical Assessment</h3>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;