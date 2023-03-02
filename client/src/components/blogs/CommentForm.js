import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentLikes from './CommentLikes';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

class CommentForm extends Component {

  state = { content: '',  posts: []};

  newComment = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(comment){
    return (event) => {
      event.preventDefault();

      const { content } = this.state;

      if(content !== ''){

        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken.exp * 1000; // convert to milliseconds
        const headers = {
          Authorization: `Bearer ${token}`
        }

        if(expirationTime < Date.now()){
          console.log("expired")
        } else {
          console.log("all good");
        }


        axios.post(`/api/blog/${comment._id}/comment`, { content }, { headers: headers })
          .then(res => {
            let response = res.data;
            console.log(response);
            if(response !== 'please sign in'){
              this.setState({ posts: [response, ...this.state.posts] });  
            } else {
              return window.location.assign('/login');
            }           
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("You didn't put in anything");
      }

      this.setState({ content: '' });
    }
  }

  renderNewComments(){
    return this.state.posts.map((post, idx) => {
      return (
        <div className="comment-spacing" key={post._id}>
          <div className="comment">
            <div className="content">
              <h4>{post.author}</h4>
               {new Date(post.datePosted).toLocaleDateString('en-US', {day: 'numeric', year: 'numeric', month: 'short'})}
            </div>
            <div className="text">
              <p>{post.content}</p>
            </div>
            <div className="extra content">
              <CommentLikes comment={post}/>
            </div>
          </div>
        </div>
      )
    });
  }


  render(){

    const { content, posts } = this.state;
    const { comment } = this.props;
    
    return (
      <div className="ui form comment-section container" id="comments">
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
        <div> 
          {this.renderNewComments()}
          <CommentList blogOwnership={comment} posts={posts} />
        </div>
      </div>
      
    );
  }
}

export default CommentForm;