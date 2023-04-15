import React from 'react';
import me from '../../images/me-fishing-600x600.jpeg';


const Bio = () => {
  return (
    <div className="bio">
      <div className="about">
        <h1>A Little About Myself...</h1>
          <p>
            Hey, 
          </p>
          <p>
            My name is Brian and I'm a web developer based out of Austin, TX. I'm an entirely self directed and have been doing web development for a little over four years now. 
            My main focus has been on frontend development with React. However, I've dabbled with other popular frameworks such
            as Angular and Vue.js. 
          </p>
          <p>
            I also do some backend and database work with Node.js and MongoDB. Backend work is something I really enjoy doing and
            is something I want to focus more on in the future.
          </p>
          <p>
            I've also worked with other langauges such as PHP and relational databases such as MySQL.
          </p>
          <p>Outside of programming, I enjoy making music which you can check out on this site. Also, enjoy doing photography which you can view on this site as well.</p>
      </div>
      <div className="bio-photo">
        <img src={me} alt="me with a fish I caught" />
      </div> 
    </div>
  );
}

export default Bio;