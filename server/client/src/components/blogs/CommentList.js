import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';

class CommentList extends Component { 
  
  componentDidMount(){
    this.props.fetchComments();
  }

  renderComments(){
    return this.props.blogs.map((blog, idx) => {
      return (
        <div key={blog._id}>
          <p>{blog.comments[idx]}</p>
        </div>
      )
    });
  }
  
  render(){
    return (
      <div>
        {this.renderComments()}
      </div>
    )
  }
}

const mapStateToProps = ({ blogs }) => {
  return { blogs: Object.values(blogs) };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);
