import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';

class CommentList extends Component { 
  
  componentDidMount(){
    this.props.fetchComments();
  }

  renderComments(){
    return this.props.comments.reverse().map((comment) => {
      console.log(comment.blog[0]);
      if(comment.blog[0] === this.props.blogOwnership._id){
        return (
          <div key={comment._id}>
            <h3>By {comment.author}</h3>
            <p>{comment.content}</p>
            <span>{comment.likes}</span>
            <p>Posted On: {new Date(comment.datePosted).toLocaleDateString()}</p>
          </div>
        )
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
  console.log(comments);
  return { 
    comments: Object.values(comments),
    blogs: Object.values(blogs)
  };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);
