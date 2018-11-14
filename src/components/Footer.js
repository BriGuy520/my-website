import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footItems">
        <div className='foot'>
          <a className="link"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a className="twit"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
          <a className="git"><i class="fa fa-github" aria-hidden="true"></i></a>
          <a className="camp"><i class="fa fa-free-code-camp" aria-hidden="true"></i></a>

        </div>

        <div className="copy">
          <p>&copy; 2018 Brian Edward Falasz</p>
        </div>

        <div  className="footLinks">
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Projects</a></li>
            <li><a>Music</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
