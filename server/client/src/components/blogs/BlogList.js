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
        <div className="ui raised segment" key={blog._id}>
          <div className="content">
            <div className="header">
              <h1>{blog.title}</h1>
              <h4>By {blog.author}</h4>
            </div>
            <div className="image">
              <img className="blog-image" alt={blog.title} src={blog.image} />
            </div>
              <p>{blog.body}</p>
            <div className="post-details">
              <span>{new Date(blog.datePosted).toLocaleDateString('en-US', {day: 'numeric', year: 'numeric', month: 'short'})}</span>
              <span>
                <i className="thumbs up outline icon"></i>{blog.likes}
              </span>
            </div>
              <button className="ui button"><Link to={`/blog/${blog._id}`}>Read More</Link></button>
          </div>
        </div>
      )
    })
  }

  render(){
    return (
      <div className="container">
        {this.renderBlogs()}
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { blogs: Object.values(blogs) };
}

export default connect(mapStateToProps, { fetchBlogs })(BlogList);