import React, { Component } from 'react';
import Cover from './Cover';
import Goals from './Goals';
import Skills from './Skills';
import '../../styles/Home.css';


class Home extends Component {

  


  render(){
   
   

    return (
      <div>
        <Cover />
        <Goals />
        <Skills />
      </div>
     
    );
  }
}

export default Home;
