import React from 'react';
import '../styles/Home.css';


const Home = () => {
  return (
    <div>
      <div className="cover">
        <h1>Hi Everybody!</h1>
      </div>
      <div className='container goals'>
        <h1>My Goals</h1>
        <p>Below is a list of goals I would like to accomplish with not just this website, but with my
        web development career in general:
        </p>
        <ul>
          <li>Goal 1</li>
        </ul>
      </div>
    </div>
   
  );
}

export default Home;
