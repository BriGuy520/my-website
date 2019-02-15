import React, { Component } from 'react';
import CommentList from './CommentList';
import axios from 'axios';

class CommentForm extends Component {

  state = { content: '', newComment: null };

  newComment = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(comment){
    return (event) => {
      event.preventDefault();

      const { content } = this.state;
      if(content !== ''){
        axios.post(`/api/blog/${comment._id}/comment`, { content })
          .then(res => {
            return res.data;
          })
          .catch(err => {
            console.log(err);
            return window.location.replace('/login');
          });
      } else {
        console.log("You didn't put in anything");
      }
      

      this.setState({ content: '' });
    }
  }


  render(){

    const { content } = this.state;
    const { comment } = this.props;

    return (
      <div className="ui form" id="comments">
        <label>Leave a Comment:</label>
        <form onSubmit={this.handleSubmit(comment)} id="comment-form">
          <textarea rows="3" onChange={this.newComment.bind(this)} 
            name="content" 
            type="text" 
            value={content} 
          />
          <button className="ui primary button">
          Submit
          </button>
        </form>
        <CommentList blogOwnership={comment} />
      </div>
      
    )
  }
}

export default CommentForm;