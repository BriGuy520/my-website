import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Projects from './Projects';
import Music from './Music';
import Blogs from './blogs/BlogList';
import Pictures from './Pictures';
import '../styles/App.css';

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/music" exact component={Music} />
              <Route path="/blog" exact component={Blogs} />
              <Route path="/pictures" exact component={Pictures} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>

    );

}

export default App;
