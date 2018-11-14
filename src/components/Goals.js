import React, { Component } from 'react';
import '../styles/Goals.css';


class Goals extends Component {

  render(){
    const goals = this.props.goals.map((goal, index) => (
      <li key={index}>{goal}</li>
    ));

    return (

      <div className='container goals'>
        <h1>My Goals</h1>
        <p>Below is a list of goals I would like to accomplish with not just this website, but with my
        web development career in general:
        </p>
        <ul>
          {goals}
        </ul>
      </div>

    );
  }
}

export default Goals;
