import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../../actions';

class BlogList extends Component {
  render(){
    return (
      <div>
        Blogs
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { blogs };
}

export default connect(mapStateToProps)(BlogList);