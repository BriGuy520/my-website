import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../../actions';

class BlogList extends Component {

  componentDidMount(){
    this.props.fetchBlogs();
  }

  renderBlogs(){
    return this.props.blogs.reverse().map(blog => {
      return (
        <div>
          <span>{blog.title}</span>
          <p>{blog.body}</p>
          <p>Posted On: {new Date(blog.datePosted).toLocaleDateString()}</p>
        </div>
      )
    })
  }

  render(){
    return (
      <div>
        {this.renderBlogs()}
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { blogs };
}

export default connect(mapStateToProps, { fetchBlogs })(BlogList);