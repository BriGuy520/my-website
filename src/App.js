import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CoverImage from './components/CoverImage';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CoverImage />
        <Footer />
      </div>
    );
  }
}

export default App;
