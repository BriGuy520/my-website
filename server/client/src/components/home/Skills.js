import React from 'react';
import frontend from '../../images/frontend-collage.jpg';
import backend from '../../images/backend-collage.jpg';
import nearFuture from '../../images/near-future-collage.jpg';
import longtermFuture from '../../images/long-future-collage.jpg';

const Skills = () => {
  return (
    <div className="technologies"> 
      <div className="tech-header copy">
        <h1>Building Beautiful, Responsive Web Apps with These Technologies.</h1>
        <p className="sub-head">Web Development is constantly evolving. New technologies and languages are constantly coming to the forefront. Here is what I know and a few things I want to learn in the future.</p>
      </div>
      <div className="tech-header-border"></div>
      <div className="skill-section">
        <div className="frontend-section">
          <div className="frontend-copy copy">
            <h1>Frontend</h1>
            <p>
              This is where I am the most confident. The main technologies that I use in my projects are HTML, CSS, Javascript with React and Redux as my "framework" of choice. While I have dabbled with other frameworks such as Angular and Vue.js, I am not as confident with those as much as I am with React.
            </p>
            <ul>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div className="collages">
            <img alt="frontend-collage" src={frontend} />
          </div>
        </div>
        <div className="tech-header-border"></div>
        <div className="backend-section">
          <div className="collages">
            <img alt="backend-collage" src={backend} />
          </div>
          <div className="backend-copy copy">
            <h1>Backend</h1>
            <p>
              While I am not a backend expert by any stretch of the imagination, I really enjoy building out the backend. When building this site, I really came to apprectiate and enjoy solving the challenges that arise when trying to build fullstack web applications. Going forward, I really want to focus more on how to build scalable web applications using certain design principles and algorithms. 
            </p>
            <ul>
              <li>MongoDB</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
        <div className="future-section">
          <div className="future-copy copy">
            <h1>The Future is Bright.</h1>
            <p className="sub-head">My motto is never settle and never stop learning. While I continue to get better at the languages and frameworks listed above, I would really like to branch out and learn some of the other exciting technologies out there in the world of programming.</p> 
          </div>
          <div className="tech-header-border-right"></div>
          <div className="near-future-section copy">
            <h2>Near Future</h2>
            <p>In the near future, I would like to focus on web based technologies. There are a lot great tools out there that can help me expand my palate and give me a the ability to choose the proper technology for a given projects needs and features.</p>
            <p>I don't want to box myself. Flexibility is the key to being a well rounded and respected developer. Now I'm not going to be an expert at all of these tomorrow, but it's not out of the realm of possibility to be proficient in all of these technologies in a few years.</p>
          </div>
          <div className="near-future-list">
            <ol>
              <li>Sass/Less</li>
              <li>GraphQL</li>
              <li>React Native</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>AngularJS</li>
              <li>Java</li>
            </ol>
            <div className="collages">
              <img alt="near-future-collage"src={nearFuture} />
            </div>
          </div>
          <div className="tech-header-border-right"></div>
        </div>
      </div>
      <div className="distant-future-section copy">
        <h2>Distant Future</h2>
        <p>In the long term, I would like to branch out of the web based technologies and get more involved with machine learning and lower level languages.</p>
        <p>
          These technologies are going to take a while to learn since being proficient in these languages involves having a deep understanding of computer science and mathematics. To improve in these areas, I have started using <a href="https://brilliant.org">brilliant.org</a>; an excellent resource to help touch up on these skills. 
        </p>
        
        <div className="long-term-list">
          <div className="collages">
            <img alt="distant-future-collage" src={longtermFuture} />
          </div>
          <ol>
            <li>Python</li>
            <li>Go</li>
            <li>Rust</li>
            <li>C++</li>
          </ol>
        </div>
      </div>
     
    </div>
  );
}

export default Skills;

