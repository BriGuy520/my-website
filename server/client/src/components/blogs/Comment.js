import React, { Component } from 'react';
import { submitComment } from '../../actions';
import axios from 'axios';

class Comment extends Component {

  state = { content: '', author: '', likes: null };

  newComment = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleSubmit(comment){
    return (event) => {
      event.preventDefault();

      const { content } = this.state;
      axios.post(`/api/blog/${comment._id}/comment`, { content })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    }

  }


  render(){

    const { content } = this.state;
    const { newComment } = this.props;
    return (
      <div>
        <label>Leave a Comment:</label>
        <form onSubmit={this.handleSubmit(newComment)}>
          <textarea onChange={this.newComment.bind(this)} 
            name="content" 
            type="text" 
            value={content} 
          />
          <button>
          Submit
          </button>
        </form>
      </div>
    )
  }
}




export default Comment;