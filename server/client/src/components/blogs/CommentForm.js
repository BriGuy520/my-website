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

      axios.post(`/api/blog/${comment._id}/comment`, { content })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });

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
        </div>

    )
  }
}

export default CommentForm;