import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue">

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

      <div className="collapse navbar-collapse" id="collapse">

        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/portfolio">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/projects">Portfolio</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>

      </div>

    </nav>
  );
}

export default Nav;
