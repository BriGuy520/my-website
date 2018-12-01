import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CoverImage from './components/CoverImage';
import Goals from './components/Goals';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <CoverImage />
        <Goals />
      </div>
    );
  }
}

export default App;
