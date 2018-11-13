import React, { Component } from 'react';


class GoalInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      goals: ['']
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleNewGoal = this.handleNewGoal.bind(this);
    this.handleChangeGoal = this.handleChangeGoal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewGoal(event){
    const {goals} = this.state;
    this.setState({goals: [...goals, '']});
  }

  handleChangeGoal(event){
    const index = Number(event.target.name.split('-')[1]);
    const goals = this.state.goals.map((goal, idx) => {
      return idx === index ? event.target : goal;
    });
    this.setState({goals});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      goals: ['']
    });
  }

  render(){
    const {goals} = this.state;
    let inputs = goals.map((goal, idx) => (
      <div key={`goal-${idx}`}>
        <label>{idx + 1}
          <input
            type="text"
            name={`goal-${idx}`}
            value={goal}
            size={45}
            autoComplete="off"
            placeholder="Goal"
            onChange={this.handleChangeGoal}
          />
        </label>
      </div>
    ));

    return (
      <div>
        <form className="goal-form" onSubmit={this.handleSubmit}>
          {inputs}
          <button
            type='type'
            className='buttons'
            onClick={this.handleNewGoal}
          >
          +
          </button>
        </form>
      </div>
    );
  }
}

export default GoalInput;
