import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './home/Home';
import Footer from './Footer';
import About from './about/About';
import Projects from './Projects';
import Music from './Music';
import Dashboard from './Dashboard';
import NewBlog from './blogs/NewBlog';
import ShowBlog from './blogs/ShowBlog';
import LoginModal from './modals/LoginModal';
import SignUp from './login/SignUp';
import Pictures from './Pictures';
import '../styles/App.css';

const App = () => {
    return (
      <div>
        <HashRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/music" exact component={Music} />
              <Route path="/blog" exact component={Dashboard} />
              <Route path="/blog/new" exact component={NewBlog} />
              <Route path="/blog/:id" exact component={ShowBlog} />
              <Route path="/login" exact component={LoginModal} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/pictures" exact component={Pictures} />
            </Switch>
            <Footer />
          </div>
        </HashRouter>
      </div>

    );

}

export default App;
