import React from 'react';
import built_with_collage from '../images/built-with-collage.png';
import html_css from '../images/html-css.png';
import html_css_js from '../images/html-css-js-collage.png';
import html_css_js_react from '../images/html-css-js-react.png';
import site_snapshot from '../images/site-snapshot.PNG';
import flexbox_snapshot from '../images/flexbox-snapshot.PNG';
import meditation_snapshot from '../images/meditation-snapshot.PNG';
import gainz_snapshot from '../images/gainz-snapshot.PNG';
import hangman_site from '../images/hangman-site.PNG';

const Projects = () => {

  const projects = [{
    title: "Flexbox Site",
    description: "This was the first project that I undertook. It is really simple. It has no functionality and is purely for design purposes.",
    pros: ['Helped me get really comfortable with CSS and HTML.', 'This page uses the latest CSS tools such as Flexbox and Animations', 'Gave me more confidence.'],
    cons: ['I could make a few more tweeks to make the content more aesthetically pleasing.', 'It has no functionality'],
    gifs: flexbox_snapshot,
    built: html_css,
    code: 'https://github.com/BriGuy520/Flexbox-Site',
    web: 'https://briguy520.github.io/Flexbox-Site/'
  },
  {
    title: "My Personal Website",
    description: "This is my first fullstack \"app\". Building it has a long and frustrating process, but it was also one the most rewarding experiences of my life.",
    pros: ['It has a lot of functionality. This site features user authentication. Authenticated users can leave comments and leave likes to blogs and other user comments.', 'The design is not half bad for someone who has zero background in design.', 'Wasn\'t made using a template. To build this site, I had to read a lot of Stack Overflow posts and solved a lot of the logical issues on my own.'],
    cons: ['The CSS could be written better, could be a lot more efficient. In retrospect, I wish I would have learned SASS/LESS to help make the CSS a little more easier to read and navigate and also implemented a mobile first design approach.', 'Doesn\'t have a local passport strategy. Really wanted to have a site visitor to have the ability to create a username and password. Was having trouble getting the user token and session to persist when they did things like make a comment or leave a like. This is something I will be working really hard to get right.', 'Need to get better at working with APIs.','Some of the React code is redundant and inefficient.'],
    gifs: site_snapshot,
    built: built_with_collage,
    code: 'https://github.com/BriGuy520/my-website',
    web: 'http://localhost:3000/'
  }, {
    title: "Meditation App",
    description: "This is a small meditation app I made. It's fairly simple. You can choose between and a rain and beach background with respective audio.",
    pros: ['Learned how to use new HTML elements such as video, audio, svg, and circle', 'Sharpened up on my DOM manipulation skills', 'Built entirely with native JavaScript'],
    cons: ['Need to work on edge cases such as a bell when the timer runs out or adding time to the clock'],
    gifs: meditation_snapshot,
    built: html_css_js,
    code: 'https://github.com/BriGuy520/meditation',
    web: 'https://briguy520.github.io/meditation/'
  },{
    title: "Hangman",
    description: 'This is a small little hangman game I made. It\'s pretty standard, nothing too crazy.',
    pros: ['I made this entirely by myself with no help from StackOverflow or google.', 'Got really comfortable making API calls with fetch.',  'Code is pretty DRY'],
    cons: ['Need to focus a little more on the styling. This is very basic. Was more focused on the functionality', 'Could add some more features to make the game a little more interesting'],
    gifs: hangman_site,
    built: html_css_js,
    code: 'https://github.com/BriGuy520/hangman',
    web: 'https://briguy520.github.io/hangman/'
  }
]

  const renderProject = () => {
    return projects.map((project, idx) => {
      return (
        <div key={idx} className="project">
        <div className="ui raised card" style={{ width: '100%', margin: '0 auto' }}>
          <div className="content website">
            <div className="card-copy" style={{ display: 'flex', 'flexDirection': 'column' }}>
              <h2 className="header">{project.title}</h2>
              <div className="description" style={{ width: '90%'}}>
                <p>{project.description}</p>
                <h3>Pros</h3>
                <ul>
                  {project.pros.map((pro, idx) => <li key={idx}>{pro}</li>)}
                </ul>
                <h3>Cons</h3>
                <ul>
                 {project.cons.map((con, idx) => <li key={idx}>{con}</li>)}
                </ul>
              </div>
            </div>
            <div className="image">
              <img alt="flexbox-site" className="site-pic" src={project.gifs} />
              <div className="links">
                <div className="link">
                  <i className="globe icon"></i>
                  <a href={project.web}>View The Site</a>
                </div>
                <div className="link">
                  <i className="code icon"></i>
                  <a href={project.code}>View The Code</a>
                </div>  
              </div>
            </div>
          </div>
          <div className="extra content built-with">
            <p>Built With:</p>
            <img alt="built-with-collage"src={project.built} style={{'justifyContent': 'center'}} />
          </div>
        </div>
      </div>
      )
    });
  }
  return (
    <div className="projects container">
          {renderProject()}
    </div>
  )
}

export default Projects;


// Removing the Gains by Gainz website

// {
//   title: "Gainz by Gaines Website",
//   description: 'This is a website that I am making for my friend Johnathan Gaines for his personal training business Gainz by Gaines. The site is a single page. I used smooth scrolling on the navbar to navigate through the site. I want to implement an ecommerce portion of the site on a seperate page. Still researching and planning the best way to build out an ecommerce store.',
//   pros: ['Really like the slider/carousal that functions as the cover of the homepage', 'Simple and easy to use'],
//   cons: ['Need to focus a little more on the styling. I think it can look a little more professional', 'Need to finish all of the functionality and replace the lorem ipsum with real information'],
//   gifs: gainz_snapshot,
//   built: html_css_js_react,
//   code: 'https://github.com/BriGuy520/gainz-website',
//   web: 'https://briguy520.github.io/gainz-website/'
// }
