import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../actions';

class BlogList extends Component {

  componentDidMount(){
    this.props.fetchBlogs();
  }

  renderBlogs(){
    return this.props.blogs.reverse().map(blog => {
      return (
        <div key={blog._id}>
          <h1>{blog.title}</h1>
          <img alt={blog.title} src={blog.image} />
          <p>{blog.body}</p>
          <h3>{blog.author}</h3>
          <span>{blog.likes}</span>
          <p>Posted On: {new Date(blog.datePosted).toLocaleDateString()}</p>
          <button><Link to={`/blog/${blog._id}`}>Read More</Link></button>
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
  return { blogs: Object.values(blogs) };
}

export default connect(mapStateToProps, { fetchBlogs })(BlogList);