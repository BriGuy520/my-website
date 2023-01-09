import React, { Component } from 'react';

class Goals extends Component {
 
  state = { 
    goal: '',
    goals: ['Move to Austin, TX','Get a Development Gig', 'Work on Problem Solving', 'Get Better at Backend Development', 'Eat Some Food'] 
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

  handleDelete = (item) => {

    const newList = this.state.goals.filter(goal => item !== goal);

    this.setState({goals: newList})
  }

  handleCompletion = (e) => {

    const {classList} = e.target;

    return classList.value === "complete" ? classList.remove("complete") : classList.add("complete");
  }

  render(){

    const goalList = this.state.goals.map((goal, idx) => {

      const completed = [0,1,3];

      return (
        <> 
          <li className={completed.includes(idx) ? "complete" : ''} key={idx} onClick={(e) => this.handleCompletion(e)}>{goal}  <i style={{color: 'rgb(9,59,109)', textDecoration: 'none'}} className="trash icon" onClick={() => this.handleDelete(goal)}></i></li>
         
        </>
      );
    });

    return (
      <div className="goals-background">
        <div className='goals'>
          <h1>My Goals</h1>
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