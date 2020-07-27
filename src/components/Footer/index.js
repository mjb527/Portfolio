import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "large",
    fontWeight: "bold"
  }

  return(
    <footer className="footer bg-blue p-4">
      <div className="">

        <div className="d-flex justify-content-center">


          <div className="p-absolute mt-2 row">
            <div className="mx-5 footer-list-item col"><Link to="/portfolio" style={ linkStyles }>Home</Link></div>
            <div className="mx-5 footer-list-item col"><Link to="/projects" style={ linkStyles }>Portfolio</Link></div>
            <div className="mx-5 footer-list-item col"><Link to="/contact" style={ linkStyles }>Contact</Link></div>
            <div className="mx-5 footer-list-item col"><a href="https://linkedin.com/in/matthew-batko" style={ linkStyles }>LinkedIn</a></div>
            <div className="mx-5 footer-list-item col"><a href="https://github.com/mjb527" style={ linkStyles }>Github</a></div>
          </div>

          </div>

        </div>

    </footer>
  )
}

export default Footer;
