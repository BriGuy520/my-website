import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import'../styles/Navbar.css';


class Navbar extends Component {
  render(){
    return (
      <header>
        <h2><Link to="/">Brian Falasz</Link></h2>
        <nav className="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
