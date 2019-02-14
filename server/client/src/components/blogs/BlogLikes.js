import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';
import axios from 'axios';

class BlogLikes extends Component {

  state = { likes: this.props.blog.likes }

  componentDidMount(){
    this.props.fetchUser();
  }

  handleClick(blog){
    if(blog.userLikes.indexOf(this.props.auth) === -1){
      axios.post(`/api/blog/${blog._id}/like`)
        .then(res => {
          let newBlogLike = blog.likes + 1;
          return newBlogLike;
        })
        .catch(err => {
          console.log(err);
          return window.location.replace('/login');
        });
    } else {
      console.log('You already liked that post silly, hehehe');
    }

    this.setState({ likes: this.props.blog.likes + 1 });
  }
  
  render(){

    const { blog } = this.props;
    const { likes } = this.state;

    console.log(likes);

    return (
      <div> 
        <button onClick={() => this.handleClick(blog)} className="like-buttons">
          <i className="thumbs up outline icon"></i>
        </button>
        {likes}
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(BlogLikes);