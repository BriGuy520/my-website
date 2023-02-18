import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions';
import BlogList from './blogs/BlogList';

class Dashboard extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div className="container">
        {/* <h1>Coming Soon...</h1> */}
        <BlogList />
        <div className="add-blog">
          <Link to="/blog/new" className="circular ui icon button large blue">
            <i className="plus icon"></i>
          </Link>
        </div>
      </div>
    )
  } 
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { fetchUser })(Dashboard);