import React from 'react';

const Skills = () => {
  return (
    <div className="skills"> 
      <h1>Skills</h1>
      <div className="section">
        <h3>Frontend</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
      </div>
      <div className="section">
        <div>
          <h3>Languages/Frameworks I want to Learn in the Near Future:</h3>
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
          <h3>Languages/Frameworks I want to Learn in the Distant Future:</h3>
          <ol>
            <li>C++</li>
          </ol>
        </div>
        
      </div>
      <div className="section">
        <h3>Backend</h3>
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

