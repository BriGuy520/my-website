import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import'../styles/Navbar.css';


class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = { showMenu: false }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this); 
  }

  showMenu(event){
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(){
    
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  renderNavbar(){
    if(window.innerWidth > 800){
      return (
        <header>
          <div className="dropdown-menu">
            <h2><Link to="/">Brian Falasz</Link></h2>
          </div>
          <nav className="nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/pictures">Pictures</Link></li>
          </nav>
        </header>
      )
    } else {
      return (
        <header>
          <div className="dropdown-menu">
            <h2><Link to="/">Brian Falasz</Link></h2>
            <i onClick={this.showMenu} className="bars icon"></i>
          </div>
          { this.state.showMenu
            ? (

              <nav 
                className="nav"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/pictures">Pictures</Link></li>
              </nav>

            ) : (

              null

            )
          }
        </header>
      )
    }
  }

  render(){
    return (
      <div>
        {this.renderNavbar()}
      </div>
    );
  }
}

export default Navbar;
