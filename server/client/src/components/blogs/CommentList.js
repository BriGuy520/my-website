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
          <div className="comment-spacing" key={comment._id}>
            <div className="comment">
              <div className="content">
                <h4>{comment.author}</h4>
                 {new Date(comment.datePosted).toLocaleDateString('en-US', {day: 'numeric', year: 'numeric', month: 'short'})}
              </div>
              <div className="text">
                <p>{comment.content}</p>
              </div>
              <div className="extra content">
                <span><i class="thumbs up outline icon"></i>{comment.likes}</span>
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
