import React, { Component } from 'react';
import Goals from './Goals';
import '../styles/GoalsList.css';

class GoalList extends Component {

  render(){
    const {onDelete} = this.props;
    const goals = this.props.goals.map((g, index) => (
      <Goals key={g.id} {...g} onDelete={onDelete} />
    ));

    return (
      <div className='container'>
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

export default GoalList;
