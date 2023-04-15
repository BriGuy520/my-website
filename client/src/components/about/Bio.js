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
            My name is Brian and I'm a web developer based out of Austin, TX and have been doing so for a little over four years now. Never went to school for Computer Science or received any formal training of any sort. Everything I've learned over the years have been through some online classes, reading a ton of documentation and building my own programs.
          </p>
          <p>
          I've been employed over the years doing primarily Wordpress development. During this time, I've really honed my skills in HTML, CSS, JavaScript, and PHP. However, Wordpress development is not what I want to do long term.
          </p>
          <p>
            Outside of work, in my free time, I've been learning as much as I can about all things computers. Spent the last couple of years learning data structures and algorithms to sharpen my problem solving skills as well as a wide variety of languages and frameworks. Some languages include Python, Java, C, C++, TypeScript, SQL, and Go.
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