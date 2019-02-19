import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import'../styles/Navbar.css';


const Navbar = () => {



  return (
    <header>
      <div className="dropdown-menu">
        <h2><Link to="/">Brian Falasz</Link></h2>
        <i className="bars icon"></i>
      </div>
      <nav className="nav">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/pictures">Pictures</Link></li>
      </nav>
    </header>
  );
}

export default Navbar;
