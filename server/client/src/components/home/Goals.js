import React, { Component } from 'react';

class Goals extends Component {
 
  state = { 
    goal: '',
    goals: ['Get a development gig', 'Move to Austin, TX', 'Buy a gun or two', 'Get a dog', 'Eat Some Food'] 
  };



  goalInput = (event) => {

    this.setState({ goal: event.target.value});

  }
 
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      goal: '',
      goals: [...this.state.goals, this.state.goal]
    });

    
  }

  handleNewGoal = (event) => {
    const { goals, goal } = this.state;

    this.setState({goals: [...goals, goal]});
  }

  render(){

    const goalList = this.state.goals.map((goal, idx) => {
      return (
        <li key={idx}>{goal}</li>
      );
    });

    return (
      <div className='goals'>
        <h1>My Goals</h1>
        <p>Below is a list of goals I would like to accomplish with not just this website, but with my
        web development career in general:
        </p>
        <div className="goal-input">
          <form onSubmit={this.handleSubmit}>
            <div className="goal-section">
              <input className="goal-input" type="text" value={this.state.goal} onChange={this.goalInput} autoComplete="off" />
              <button type='button' onClick={this.handleNewGoal.bind(this)} className="buttons info">Add Goal</button>
            </div>
          </form>
        </div>
        <ol> 
          {goalList} 
        </ol>
      </div>
    );
  }
}

export default Goals;