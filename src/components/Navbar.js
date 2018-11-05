import React, { Component } from 'react';
import'../styles/Navbar.css';


class Navbar extends Component {
  render(){
    return (
      <header>
        <h2>Brian Falasz</h2>
        <nav className="navbar">
          <li><a>About</a></li>
          <li><a>Projects</a></li>
          <li><a>Music</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
