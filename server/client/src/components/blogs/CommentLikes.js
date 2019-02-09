import React, { Component } from 'react';
import axios from 'axios';

class CommentLikes extends Component {

  state = { updated: false };

  handleClick(comment){
    axios.post(`/api/comment/${comment._id}/like`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        return window.location.replace('/login');
      });

      
  }
  
  render(){

    const { comment } = this.props;
    
    return (
      <button onClick={() => this.handleClick(comment)} className="like-buttons">
        <i className="thumbs up outline icon"></i>
      </button>
    )
  }
}

export default CommentLikes;