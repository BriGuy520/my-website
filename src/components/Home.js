import React, { Component } from 'react';
import '../styles/Home.css';


class Home extends Component {

  state = { 
    goal: '',
    goals: ['Get a development gig'] 
  };



  goalInput = (event) => {

    this.setState({ goal: event.target.value});

  }
 
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      goal: '',
      goals: [...this.state.goals, this.state.goal]
    })
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
              <div className="goal-section">
                <input className="goal-input" type="text" value={this.state.goal} onChange={this.goalInput} autoComplete="off" />
                <button type='button' onClick={this.handleNewGoal.bind(this)} className="buttons info">Add Goal</button>
              </div>
            </form>
          </div>
          <ul> 
            {goalList} 
          </ul>
        </div>
      </div>
     
    );
  }
}

export default Home;
