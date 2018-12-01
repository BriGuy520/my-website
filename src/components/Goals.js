import React, { Component } from 'react';
import '../styles/Goals.css';


class Goals extends Component {

  render(){
    return (

      <div className='container goals'>
        <h1>My Goals</h1>
        <p>Below is a list of goals I would like to accomplish with not just this website, but with my
        web development career in general:
        </p>
        <ul>
          <li>Goal 1</li>
        </ul>
      </div>

    );
  }
}

export default Goals;
