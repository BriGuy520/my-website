import React from 'react';
import me from '../../images/me-fishing-600x600.jpeg';


const Bio = () => {
  return (
    <div className="bio">
      <div className="about">
        <img className="bio-photo" src={me} alt="me with a fish I caught" />
        <h1>A Little About Myself...</h1>
          <p>
            Hey, 
          </p>
          <p>
            My name is Brian and I'm a web developer based out of Austin, TX. I have been doing web development for a little over four years now. Never went to school for Computer Science or received any formal training. Everything I've learned over the years has been through individual online classes, reading a ton of documentation and building my own programs.
          </p>
          <p>
          I've been employed over the years doing primarily Wordpress development full time. During this time, I've really honed my skills in HTML, CSS, JavaScript, and PHP. However, Wordpress development is not what I want to do long term.
          </p>
          <p>
            In my free time, I've been learning as much as I can about all things computers, not just programming. It's important to me to not only know how to be a good programmer but to have a good understanding of how things like web browsers, networks, operating systems, hardware, etc. work as well. Learning these subjects has given me a better idea of how what I'm doing with code is working with all of these other components that ultimately lead to the end result the user sees and interacts with.
          </p>
          <p>
             As it relates to code, I've spent the last couple of years learning data structures and algorithms to sharpen my problem solving skills as well as a wide variety of languages and frameworks. Some languages include Python, Java, C, C++, TypeScript, SQL, and Go.
          </p>
          <p>
            More recently, I've really focused on frontend development with a primary focus of learning modern React. This website is built with the class based version and I've spent the last few months learning the modern, hooks based version. Really excited about the amount of progress I've made in such a short period of time. I've already built a <a href="https://github.com/BriGuy520/ReactCalculator" target='_blank' rel="noreferrer">pretty cool calculator</a> and a <a href="https://github.com/BriGuy520/flash-cards" target="_blank" rel="noreferrer">flash card app</a> with React hooks. The latter is my first app built entirely in TypeScript!   
          </p>
          <p>
            I also do some backend and database work with Node.js and MongoDB. In fact, this website uses those two technologies to power the blog and user authentication system that I've built in. Backend work is something I really enjoy doing and
            is something I want to focus more on in the future.
          </p>
          <p>Outside of programming, I enjoy making music which you can check out on this site <a href="/music/">here</a>. Also, enjoy doing photography and you can view some of my photos <a href="/pictures/">here</a> as well.</p>
      <div className="section-right"></div>
      </div>
    </div>
    
  );
}

export default Bio;