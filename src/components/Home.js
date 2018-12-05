import React, { Component } from 'react';
import '../styles/Home.css';


class Home extends Component {

  state = { goals: ['Get a development gig'] };


  handleNewGoal = (event) => {
    const { goals } = this.state;
    this.setState({ goals: [...goals, '']});
  }

  handleGoalChange = (event) => {
    const index = Number(event.target.name.split('-')[1]);
    const goals = this.state.goals.map((goal, idx) => {
      return idx === index ? event.target.value : goal;
    });

    this.setState({goals});

  } 

  render(){

    const { goals } = this.state;

    const goalInput = goals.map((goal, idx) => {
      return (
        <div className="goal-input" key={idx}>
          <label>{idx +  1}</label>
          <input type="text" name={`goal-${idx}`} value={goal} autoComplete="off" onChange={this.handleGoalChange.bind(this)} />
        </div>
      );
    });
  
    return (
      <div>
        <div className="cover">
          <h1>Hi Everybody!</h1>
        </div>
        <div className='goals'>
          <h1>My Goals</h1>
          <p>Below is a list of goals I would like to accomplish with not just this website, but with my
          web development career in general:
          </p>
          <div className="goal-input">
            <form onSubmit={this.handleSubmit}>
              <button type='button' onClick={this.handleNewGoal.bind(this)} className="buttons">Add Goal</button>
            </form>
          </div>
          <ol>
            {goalInput}
          </ol>
        </div>
      </div>
     
    );
  }
}

export default Home;
