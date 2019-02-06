import React from 'react';

const Skills = () => {
  return (
    <div className="skills"> 
      <h1>Skills</h1>
      <p>These are the things I know:</p>
      <img alt="javascript" src="http://pluspng.com/img-png/logo-javascript-png-esp8266-ile-sunucuya-javascript-530.png" />
      <img 
      alt="mongodb"
      src="https://i2.wp.com/www.damiencosset.com/wp-content/uploads/2017/07/mongodb.png" />
      <img alt="express" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" />
      <img alt="react" src="https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png" />
      <img alt="redux" src="https://i2.wp.com/blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png?fit=500%2C500" />
      <img alt="node"
        style={{height: '300px', width: '500px', padding: '40px'}}
        src="https://cdn-images-1.medium.com/max/1200/1*WAsgQ04w4JM-NBXC_zcV1Q.png" />
      <p>What I would like to learn:</p>
      <img alt="python"
        src="https://www.python.org/static/community_logos/python-logo-generic.svg"
      />
    </div>
  );
}

export default Skills;

