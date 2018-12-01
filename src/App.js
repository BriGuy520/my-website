import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </div>
        </BrowserRouter>
      </div>

    );

}

export default App;
