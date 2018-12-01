import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Music from './components/Music';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/music" exact component={Music} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/contact" exact component={Contact} />
          </div>
        </BrowserRouter>
      </div>

    );

}

export default App;
