import React, { Component } from 'react';

class Goals extends Component {
 
  state = { 
    goal: '',
    completed: [0,1,3],
    goals: ['Move to Austin, TX','Get a development gig', 'Work on problem solving', 'Get Better at backend development', 'Have a functioning Blog'] 
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

  handleDelete = (item, i) => {

    const newList = this.state.goals.filter(goal => item !== goal);
    const removeFromCompletedList = this.state.completed.filter(value => value !== i);
    console.log(removeFromCompletedList);

    this.setState({goals: newList, completed: removeFromCompletedList})
  }

  handleCompletion = (e, i) => {

    const {classList} = e.target;

    this.setState({completed: !this.state.completed.includes(i) ? [...this.state.completed, i] : this.state.completed})

    return classList.value === "complete" ? classList.remove("complete") : classList.add("complete");
  }

  render(){

    const goalList = this.state.goals.map((goal, idx) => {

      console.log(this.state.completed);

      return (
        <> 
          <li className={this.state.completed.includes(idx) ? "complete" : ''} key={`item-${idx}`} onClick={(e) => this.handleCompletion(e, idx)}>{goal}  <i style={{color: 'rgb(9,59,109)', textDecoration: 'none'}} className="trash icon" onClick={() => this.handleDelete(goal, idx)}></i></li>
         
        </>
      );
    });

    return (
      <div className="goals-background">
        <div className='goals'>
          <h1>Goals</h1>
          <p>Below is a list of goals I would like to accomplish with not just this website, but with my
          web development career in general:
          </p>
          <div className="goal-list">
            <div className="goal-input">
              <form onSubmit={this.handleSubmit}>
                <div className="ui form">
                  <input className="field" type="text" value={this.state.goal} onChange={this.goalInput} autoComplete="off" />
                  <button type='button' onClick={this.handleNewGoal.bind(this)} className="buttons info">Add Goal</button>
                </div>
              </form>
            </div>
              <ol> 
                {goalList} 
              </ol>
            </div>
          </div>
      </div>
    );
  }
}

export default Goals;