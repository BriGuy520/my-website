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

  const projects = [
  {
    title: "My Personal Website",
    description: "This is my first fullstack \"app\". Building it has been a long and frustrating process. But it has taught me more than a tutorial ever has.",
      pros: ['Have a cool Todo list on the homepage as well as embedded timeline of my Twitter account.', 'Have a fully functional blog that can be uploaded to the site as a Markdown file. Only authorized users can visit the route that handles the file uploads. You can add a comment and like to each blog.','This site features user authentication. Can use a local, Twitter, Facebook, Google, or Github strategy to login.', 'The design is not half bad.'],
      cons: ['The CSS could be written better, could be a lot more efficient. In retrospect, I wish I would have learned SASS/LESS to help make the CSS a little more easier to read and navigate and also implemented a mobile first design approach.','Some of the React code is redundant and inefficient.'],
    gifs: site_snapshot,
    built: built_with_collage,
    code: 'https://github.com/BriGuy520/my-website',
    web: 'https://www.brithedevguy.com/'
  }, {
    title: "Meditation App",
    description: "This is a small meditation app I made. It's fairly simple. You can choose between and a rain and beach background with respective audio.",
    pros: ['Learned how to use new HTML elements such as video, audio, svg, and circle.', 'Sharpened up on my DOM manipulation skills.', 'Built entirely with native JavaScript.'],
    cons: ['Need to work on edge cases such as a bell when the timer runs out or adding time to the clock.'],
    gifs: meditation_snapshot,
    built: html_css_js,
    code: 'https://github.com/BriGuy520/meditation',
    web: 'https://briguy520.github.io/meditation/'
  },{
    title: "Hangman",
    description: 'This is a small little hangman game I made. It\'s pretty standard, nothing too crazy.',
    pros: ['I made this entirely by myself with no help from StackOverflow or google.', 'Got really comfortable making API calls with fetch.',  'Code is pretty DRY.'],
    cons: ['Need to focus a little more on the styling. This is very basic. Was more focused on the functionality.', 'Could add some more features to make the game a little more interesting.'],
    gifs: hangman_site,
    built: html_css_js,
    code: 'https://github.com/BriGuy520/hangman',
    web: 'https://briguy520.github.io/hangman/'
  },{
    title: "Flexbox Site",
    description: "This was the first project that I undertook. It is really simple. It has no functionality and is purely for design purposes.",
    pros: ['Helped me get really comfortable with CSS and HTML.', 'This page uses the latest CSS tools such as Flexbox and Animations', 'Gave me more confidence.'],
    cons: ['I could make a few more tweeks to make the content more aesthetically pleasing.', 'It has no functionality.'],
    gifs: flexbox_snapshot,
    built: html_css,
    code: 'https://github.com/BriGuy520/Flexbox-Site',
    web: 'https://briguy520.github.io/Flexbox-Site/'
  },
]

  const renderProject = () => {
    return projects.map((project, idx) => {
      return (
        <div key={idx} className="project">
        <div className="ui raised card" style={{ width: '100%', margin: '0 auto' }}>
          <div className="content website">
            <div className="card-copy" style={{ display: 'flex', 'flexDirection': 'column' }}>
              <h2 className="header">{project.title}</h2>
              <div className="description" style={{ width: '95%'}}>
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
                  <a href={project.web}>View the App</a>
                </div>
                <div className="link">
                  <i className="code icon"></i>
                  <a href={project.code}>Read the Code</a>
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
