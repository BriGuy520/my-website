import React, { Component } from 'react';
import axios from 'axios';

class BlogLikes extends Component {

  state = { likes: this.props.blog.likes }

  handleClick(blog){

    axios.post(`/api/blog/${blog._id}/like`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        return window.location.replace('/login');
      });

      this.setState({likes: this.props.blog.likes + 1 })
  }
  
  render(){

    const { blog } = this.props;
    return (
      <button onClick={() => this.handleClick(blog)} className="like-buttons">
        <i className="thumbs up outline icon"></i>
      </button>
    )
  }
}

export default BlogLikes;