import React, { Component } from 'react';
import Cover from './Cover';
import Goals from './Goals';
import Skills from './Skills';
import Tweets from './Tweets';
import '../../styles/App.css';


class Home extends Component {

  render(){
    return (
      <div>
        <Cover />
        <Goals />
        <Tweets />
        <Skills />
      </div>   
    );
  }
}

export default Home;
