import React from 'react';
import built_with_collage from '../images/built-with-collage.png';
import html_css from '../images/html-css.png';
import site_snapshot from '../images/site-snapshot.PNG';
import flexbox_snapshot from '../images/flexbox-snapshot.PNG';

const Projects = () => {
  return (
    <div className="projects">
      <div className="project">
        <div className="ui raised card" style={{ width: '90%', margin: '0 auto' }}>
          <div className="content website">
            <div className="card-copy" style={{ display: 'flex', 'flex-direction': 'column' }}>
              <h2 className="header">My Personal Website</h2>
              <div className="description" style={{ width: '90%'}}>
                <p>This is the first fullstack website. Building it was a long and frustrating, but it was also one the most rewarding experiences of my life.</p>
                <h3>Pros</h3>
                <ul>
                  <li>It has a lot of functionality. This site features user authentication and a fully functional blog. Authenticated users can leave comments and leave likes to blogs and other user comments.</li>
                  <li>The design is not half bad for someone who has zero background in design.</li>
                  <li>Wasn't made using a template. To build this site, I had to read a lot of Stack Overflow posts and solve a lot of the logical issues on my own.</li>
                </ul>
                <h3>Cons</h3>
                <ul>
                  <li>The CSS could be a lot better, a lot more efficient. In retrospect, I wish I would have learned SASS/LESS to help make the CSS a little more easier to read and navigate.</li>
                  <li>Need to get better at working with APIs.</li>
                  <li>Some of the React code is redundant and inefficient.</li>
                </ul>
              </div>
            </div>
            <div className="image">
              <img className="site-pic" src={site_snapshot} />
            </div>
          </div>
          <div className="extra content built-with">
            <p>Built With:</p>
            <img src={built_with_collage} style={{'justify-content': 'center'}} />
          </div>
        </div>
      </div>
      <div className="project">
        <div className="ui raised card" style={{ width: '90%', margin: '0 auto' }}>
          <div className="content website">
            <div className="card-copy" style={{ display: 'flex', 'flex-direction': 'column' }}>
              <h2 className="header">Flexbox Site</h2>
              <div className="description" style={{ width: '90%'}}>
                <p>This was the first project that I undertook. It is really simple. It has no functionality and is purely for design purposes. </p>
                <h3>Pros</h3>
                <ul>
                  <li>Helped me get really comfortable with CSS and HTML.</li>
                  <li>This page uses the latest CSS tools such as Flexbox and Animations</li>
                  <li>Gave me more confidence.</li>
                </ul>
                <h3>Cons</h3>
                <ul>
                  <li>I could make a few more tweeks to make the content more aesthetcally pleasing.</li>
                  <li>It has no functionality</li>
                </ul>
              </div>
            </div>
            <div className="image">
              <img className="site-pic" src={flexbox_snapshot} />
            </div>
          </div>
          <div className="extra content built-with" style={{ display: 'flex', 'flex-direction': 'row' }}>
            <p>Built With:</p>
            <img src={html_css} style={{'justify-content': 'center'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
