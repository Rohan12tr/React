import React from "react";
import "../Css/Header.css"
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <div>
      <div className="header">
      <Link to="/" className="logo">Logo</Link>
      <div className="header-right">
        {/* <Link to="/" className="active">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link> */}

       <NavLink to="/" className="">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
    </div>
  );
}

export default Header;
