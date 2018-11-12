import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CoverImage from './components/CoverImage';
import Goals from './components/Goals';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CoverImage />
        <Goals />
        <Footer />
      </div>
    );
  }
}

export default App;
