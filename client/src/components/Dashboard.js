import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions';
import BlogList from './blogs/BlogList';

class Dashboard extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  isAuthenticated(){

    if(this.props.auth === null){
      return <div>Loading...</div>
    }

    if(this.props.auth.admin){
      return (
        <Link to="/blog/new" className="circular ui icon button large blue">
          <i className="plus icon"></i>
        </Link> 
      );
    } else {
      return null;
    }
  }

  render(){
    return (
      <div className="container">
        {/* <h1>Coming Soon...</h1> */}
        <BlogList />
        <div className="add-blog">
          {this.isAuthenticated()}
        </div>
      </div>
    )
  } 
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { fetchUser })(Dashboard);