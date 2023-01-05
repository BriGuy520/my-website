import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import'../styles/App.css';


class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = { showMenu: false, width: 0, height: 0 };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this); 
  }

  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount(){
    this.updateWindowDimensions();
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions(){
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
