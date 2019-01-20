import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';

class CommentList extends Component { 
  
  componentDidMount(){
    this.props.fetchComments();
  }

  renderComment(){
    return this.props.blogs.map(blog => {
      return (
        <div>
          <p>{blog.comment}</p>
        </div>
      )
    });
  }
  
  render(){
    return (
      <div>
        {this.renderComment()}
      </div>
    )
  }
}

const mapStateToProps = ({ blogs }) => {
  return { blogs: Object.values(blogs) };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);
