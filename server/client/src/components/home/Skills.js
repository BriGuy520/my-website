import React from 'react';

const Skills = () => {
  return (
    <div className="skills"> 
      <div className="top-section">
        <h1>Skills</h1>
        <p>Here are a few things I know and wish to know in the near to long term future.</p>
      </div>
      <div className="">
        <div className="skill-section">
          <div className="section-headers">
            <div className="section-icon">
              <i className="desktop icon"></i>
            </div>
          </div>
          <div className="skill-list">
            <h3>Frontend</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
            <div className="section-border"></div>
          </div>
        </div>
        <div className="skill-section">
          <div>
            <div className="section-headers">
              <div className="section-icon">
                <i className="road icon"></i>
              </div>
              <h3>Languages/Frameworks I want to Learn in the Near Future:</h3> 
            </div>
            <ol>
              <li>Angular</li>
              <li>Ember</li>
              <li>Vue</li>
              <li>Python</li>
              <li>PHP</li>
              <li>Ruby/Rails</li>
            </ol>
          </div>
          <div>
            <div className="section-headers">
              <div className="section-icon">
                <i className="rocket icon"></i>
              </div>
              <h3>Languages/Frameworks I want to Learn in the Distant Future:</h3>
            </div>
            <ol>
              <li>C++</li>
              <li>Go</li>
            </ol>
          </div>
          <div className="section-border"></div>
        </div>
        <div className="skill-section">
          <div className="section-headers">
            <div className="section-icon">
              <i className="sitemap icon"></i>
            </div>
            <h3>Backend</h3>
          </div>
          <ul>
            <li>MongoDB</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

