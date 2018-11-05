import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CoverImage from './components/CoverImage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CoverImage />
      </div>
    );
  }
}

export default App;
