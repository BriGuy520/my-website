import React from 'react';

const Skills = () => {
  return (
    <div className="skills"> 
      <div className="skill-section">
        <div className="section-headers">
          <i className="desktop icon"></i>
          <h3>Frontend</h3>
        </div>
        <ul>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
      </div>
      <div className="skill-section">
        <div>
          <div className="section-headers">
            <i className="road icon"></i>
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
            <i className="rocket icon"></i>
            <h3>Languages/Frameworks I want to Learn in the Distant Future:</h3>
          </div>
          <ol>
            <li>C++</li>
          </ol>
        </div>
        
      </div>
      <div className="skill-section">
        <div className="section-headers">
          <i class="sitemap icon"></i>
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
  );
}

export default Skills;

