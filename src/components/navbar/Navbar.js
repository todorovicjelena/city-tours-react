import React from "react";
import logo from "../../logo.svg";
import './navbar.scss';
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img className='logo' src={logo} alt="city tours company"></img>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/" className="nav-link">About</a>
          </li>

          <li>
            <a href="/" className="nav-link active">Tours</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
