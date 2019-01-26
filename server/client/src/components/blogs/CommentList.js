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
            <div className="comment">
              <div className="content">
                <h5>By {comment.author}</h5>
              </div>
              <div className="text">
                <p>{comment.content}</p>
              </div>
              <span><i class="thumbs up outline icon"></i>{comment.likes}</span>
              <div className="date">
                Posted On: {new Date(comment.datePosted).toLocaleDateString()}
              </div>
            </div>
          </div>
        );
      }
    });
  }
  
  render(){
    return (
      <div className="ui comments">
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
