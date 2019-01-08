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
        <div key={blog._id}>
          <img alt={blog.title} src={blog.image} />
          <span>{blog.title}</span>
          <span>{blog.author.username}</span>
          <p>{blog.body}</p>
          <span>{blog.likes}</span>
          <p>Posted On: {new Date(blog.datePosted).toLocaleDateString()}</p>
          <button>Read More</button>
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