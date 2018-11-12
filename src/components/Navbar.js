import React, { Component } from 'react';
import'../styles/Navbar.css';


class Navbar extends Component {
  render(){
    return (
      <header>
        <h2>Brian Falasz</h2>
        <nav className="navbar">
          <li>About</li>
          <li>Projects</li>
          <li>Music</li>
          <li>Blog</li>
          <li>Contact</li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
