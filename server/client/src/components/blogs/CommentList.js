import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';

class CommentList extends Component { 
  
  componentDidMount(){
    this.props.fetchComments();
  }

  renderComments(){
    return this.props.comments.map((comment, idx) => {
      return (
        <div key={comment._id}>
          <h3>By {comment.author}</h3>
          <p>{comment.content}</p>
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

const mapStateToProps = ({ comments }) => {
  console.log(comments);
  return { comments: Object.values(comments) };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);
