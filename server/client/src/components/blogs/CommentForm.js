import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component {

  state = { content: '', author: '', likes: null };

  newComment = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleSubmit(comment){
    return (event) => {
      event.preventDefault();

      const { content } = this.state;
      console.log(content);
       axios.post(`/api/blog/${comment._id}/comment`, { content })
      .then(res => {
        return res.data;
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




export default CommentForm;