import React, { Component } from 'react';
import { submitComment } from '../../actions';

class Comment extends Component {

  state = { content: '' };

  newComment = (event) => {
    this.setState({ content: event.target.value });
  }
  
  handleSubmit(event){
    event.preventDefault();

    this.setState({ content: '' });
  }

  render(){

    const { newComment } = this.props;
    const { content } = this.state;

    return (
      <div>
        <label>Leave a Comment:</label>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.newComment.bind(this)} type="text" value={content} />
          <button  onClick={() => submitComment(newComment._id, content)}>
          Submit
          </button>
        </form>
      </div>
    )
  }
}




export default Comment;