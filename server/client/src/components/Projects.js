import React from 'react';
import built_with_collage from '../images/built-with-collage.png';
import site_snapshot from '../images/site-snapshot.PNG';
import flexbox_snapshot from '../images/flexbox-snapshot.PNG';

const Projects = () => {
  return (
    <div className="projects">
      <div className="project">
        <div className="ui raised card" style={{ width: '90%', margin: '0 auto' }}>
          <div className="content" style={{ display: 'flex', 'flex-direction': 'row' }}>
            <div style={{ display: 'flex', 'flex-direction': 'column' }}>
              <h2 className="header">My Personal Website</h2>
              <div className="description" style={{ width: '90%'}}>
                <p>This is the first fullstack website. Building it was a long and frustrating, but it was also one the most rewarding experiences of my life.</p>
                <h3>Pros</h3>
                <ul>
                  <li>It has a lot of functionality.</li>
                  <li>The design is not half bad for someone who has zero background in design.</li>
                  <li>Wasn't made using a template.</li>
                </ul>
                <h3>Cons</h3>
                <ul>
                  <li>The CSS could be a lot better, a lot more efficient.</li>
                  <li>Need to get better at working with APIs.</li>
                  <li>Some of the React code is redundant and inefficient.</li>
                </ul>
              </div>
            </div>
            <div className="image">
              <img className="site-pic" src={site_snapshot} />
            </div>
          </div>
          <div className="extra content" style={{ display: 'flex', 'flex-direction': 'row' }}>
            <p>Built With:</p>
            <img src={built_with_collage} style={{'justify-content': 'center'}} />
          </div>
        </div>
      </div>
      <div className="project">
        <div className="ui raised card" style={{ width: '90%', margin: '0 auto' }}>
          <div className="content" style={{ display: 'flex', 'flex-direction': 'row' }}>
            <div style={{ display: 'flex', 'flex-direction': 'column' }}>
              <h2 className="header">Flexbox Site</h2>
              <div className="description" style={{ width: '90%'}}>
                <p>This was the first project that I undertook. It is really simple. It has no functionality and is purely for design purposes. </p>
                <h3>Pros</h3>
                <ul>
                  <li>Helped me with design.</li>
                  <li>Got a great understanding of how works flexbox, which is awesome.</li>
                  <li>Gave me more confidence.</li>
                </ul>
                <h3>Cons</h3>
                <ul>
                  <li>I could do a little better making sure the spacing. </li>
                  <li>It has no functionality</li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="image">
              <img className="site-pic" src={flexbox_snapshot} />
            </div>
          </div>
          <div className="extra content" style={{ display: 'flex', 'flex-direction': 'row' }}>
            <p>Built With:</p>
            <img src={built_with_collage} style={{'justify-content': 'center'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
