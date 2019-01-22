import React, { Component } from 'react';
import { submitComment } from '../../actions';
import axios from 'axios';

class Comment extends Component {

  state = { content: '' };

  newComment = (event) => {
    this.setState({ content: event.target.value });
  }
  
  handleSubmit(event){
    event.preventDefault();

   // this.setState({ content: '' });
  }

  submitComment(id){
    axios.post(`/api/blog/${id}/comment`, {
      content: this.state.content
    });
  }

  render(){

    const { newComment } = this.props;
    const { content } = this.state;
    console.log(newComment);
    return (
      <div>
        <label>Leave a Comment:</label>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.newComment.bind(this)} type="text" value={content} />
          <button  onClick={() => submitComment(newComment._id)}>
          Submit
          </button>
        </form>
      </div>
    )
  }
}




export default Comment;