import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CoverImage from './components/CoverImage';
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      goals: [
        {
          id: 0,
          goal: ['']
        }
      ],
      nextGoalId: 1,
      showForm: false
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(goal){
    this.setState((prevState, props) => {
      const newGoal = {...goal, id: this.state.nextGoalId};

      return  {
        nextGoalId: prevState.nextGoalId + 1,
        goals: [...this.state.goals, newGoal],
        showForm: false
      }

    });
  }

  onDelete(id){
    const goals = this.state.goals.filter(goal => goal.id !== id);
    this.setState({goals});
  }


  render() {
    const {showForm} = this.state;
    return (
      <div>
        <Navbar />
        <CoverImage />
        <GoalList />
        <Footer />
      </div>
    );
  }
}

export default App;
