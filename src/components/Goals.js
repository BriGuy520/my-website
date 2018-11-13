import React, { Component } from 'react';
import '../styles/Goals.css';


class Goals extends Component {

  render(){
    const goals = this.props.goals.map((goal, index) => (
      <li key={index}>{goal}</li>
    ));

    return (
      <div className="goals">
          {goals}

      </div>
    );
  }
}

export default Goals;
