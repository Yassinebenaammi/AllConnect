import React from 'react';
import '../App.css';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll

function NavBar() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-12 col-sm-6">
          <nav className="navbar navbar-expand-lg navbar-light sp ">
            <ScrollLink to="hero" smooth={true} duration={100} className="navbar-brand">AllConnect</ScrollLink>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <ScrollLink to="hero" smooth={true} duration={100} className="nav-link m-3 " style={{ cursor: 'pointer'}}>Home</ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink to="features" smooth={true} duration={100} className="nav-link m-3 "style={{ cursor: 'pointer'}}>Why Us</ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink to="projects" smooth={true} duration={100} className="nav-link m-3 " style={{ cursor: 'pointer'}}>Projects</ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink to="contact" smooth={true} duration={100} className="nav-link m-3 "style={{ cursor: 'pointer'}}>Contact</ScrollLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
