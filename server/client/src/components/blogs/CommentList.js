import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';

class CommentList extends Component { 
  
  componentDidMount(){
    this.props.fetchComments();
  }

  componentDidUpdate(){
    this.props.fetchComments();
  }

  renderComments(){
    return this.props.comments.reverse().map((comment) => {
      if(comment.blog === this.props.blogOwnership._id){
        return (
          <div key={comment._id}>
            <h3>By {comment.author}</h3>
            <p>{comment.content}</p>
            <span>{comment.likes}</span>
            <p>Posted On: {new Date(comment.datePosted).toLocaleDateString()}</p>
          </div>
        );
      }
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

const mapStateToProps = ({ comments, blogs }) => {
  return { 
    comments: Object.values(comments),
    blogs: Object.values(blogs)
  };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);
