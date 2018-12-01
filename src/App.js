import React from 'react';
import Navbar from './components/Navbar';
import CoverImage from './components/CoverImage';
import Goals from './components/Goals';
import './App.css';

const App = () => {
    return (
      <div>
        <Navbar />
        <CoverImage />
        <Goals />
      </div>
    );

}

export default App;
