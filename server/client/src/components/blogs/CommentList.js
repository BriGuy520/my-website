import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';
import CommentLikes from './CommentLikes';

class CommentList extends Component { 
  
  componentDidMount(){
    this.props.fetchComments();
  }

  // componentDidUpdate(prevProps, prevState){
  //   console.log(prevProps.comments);
  //   console.log(this.props.comments);
  //   if(prevProps.comments !== this.props.comments){
  //     this.props.fetchComments();
  //   };
  // }

  renderComments(){
    return this.props.comments.reverse().map((comment, idx) => {
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
                <CommentLikes comment={this.props.comments[idx]} />
                {comment.likes}
              </div>
            </div>
          </div>
        );
      } else {
        return null;
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

const mapStateToProps = ({ comments }) => {

  return { 
    comments: Object.values(comments)
  };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);
