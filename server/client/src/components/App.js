import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './home/Home';
import Footer from './Footer';
import About from './about/About';
import Projects from './Projects';
import Music from './Music';
import Dashboard from './Dashboard';
import NewBlog from './blogs/NewBlog';
import LoginModal from './modals/LoginModal';
import ShowBlog from './blogs/ShowBlog';
import Pictures from './Pictures';
import '../styles/App.css';

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <LoginModal />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/music" exact component={Music} />
              <Route path="/blog" exact component={Dashboard} />
              <Route path="/blog/new" exact component={NewBlog} />
              <Route path="/blog/:id" exact component={ShowBlog} />
              <Route path="/pictures" exact component={Pictures} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>

    );

}

export default App;
