import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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


const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {

  console.log(authenticated);

  if(authenticated === null){
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated.admin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

class App extends Component {
  
  async componentDidMount(){

    await this.props.fetchUser();

  }





  render(){

    if(this.props.auth === null){
      return <div>Loading...</div>;
    }

    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar user={this.props.auth} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/music" exact component={Music} />
              <Route path="/blog" exact component={Dashboard} />
              <PrivateRoute path="/blog/new" exact component={NewBlog} authenticated={this.props.auth} />
              <Route path="/blog/:id" exact component={ShowBlog} />
              <Route path="/login" exact component={LoginModal} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/pictures" exact component={Pictures} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>

    );
  }

}

const mapStateToProps = (state) => {

  return { auth: state.auth }
}

export default connect(mapStateToProps, { fetchUser })(App);
