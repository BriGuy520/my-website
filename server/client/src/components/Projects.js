import React from 'react';
import built_with_collage from '../images/built-with-collage.png';
import html_css from '../images/html-css.png';
import site_snapshot from '../images/site-snapshot.PNG';
import flexbox_snapshot from '../images/flexbox-snapshot.PNG';

const Projects = () => {

  const projects = [{
    title: "Flexbox Site",
    description: "This was the first project that I undertook. It is really simple. It has no functionality and is purely for design purposes.",
    pros: ['Helped me get really comfortable with CSS and HTML.', 'This page uses the latest CSS tools such as Flexbox and Animations', 'Gave me more confidence.'],
    cons: ['I could make a few more tweeks to make the content more aesthetcally pleasing.', 'It has no functionality'],
    gifs: flexbox_snapshot,
    built: built_with_collage
  },
  {
    title: "My Personal Website",
    description: "This is the first fullstack website. Building it was a long and frustrating, but it was also one the most rewarding experiences of my life.",
    pros: ['It has a lot of functionality. This site features user authentication and a fully functional blog. Authenticated users can leave comments and leave likes to blogs and other user comments.', 'The design is not half bad for someone who has zero background in design.', 'Wasn\'t made using a template. To build this site, I had to read a lot of Stack Overflow posts and solved a lot of the logical issues on my own.'],
    cons: ['The CSS could be a lot better, a lot more efficient. In retrospect, I wish I would have learned SASS/LESS to help make the CSS a little more easier to read and navigate.', 'Need to get better at working with APIs.','Some of the React code is redundant and inefficient.'],
    gifs: site_snapshot,
    built: html_css

  }]

  const renderProject = () => {
    return projects.map(project => {
      return (
        <div className="project">
        <div className="ui raised card" style={{ width: '90%', margin: '0 auto' }}>
          <div className="content website">
            <div className="card-copy" style={{ display: 'flex', 'flex-direction': 'column' }}>
              <h2 className="header">{project.title}</h2>
              <div className="description" style={{ width: '90%'}}>
                <p>{project.description}</p>
                <h3>Pros</h3>
                <ul>
                  {project.pros.map((pro, idx) => <li>{pro}</li>)}
                </ul>
                <h3>Cons</h3>
                <ul>
                 {project.cons.map((con, idx) => <li>{con}</li>)}
                </ul>
              </div>
            </div>
            <div className="image">
              <img alt="flexbox-site" className="site-pic" src={project.gifs} />
            </div>
          </div>
          <div className="extra content built-with" style={{ display: 'flex', 'flex-direction': 'row' }}>
            <p>Built With:</p>
            <img alt="built-with-collage"src={project.built} style={{'justify-content': 'center'}} />
          </div>
        </div>
      </div>
      )
    });
  }
  return (
    <div className="projects">
          {renderProject()}
    </div>
  )
}

export default Projects;
