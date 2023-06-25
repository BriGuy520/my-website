import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, signin } from '../../actions/index';
import axios from 'axios';

class BlogLikes extends Component {

  state = { likes: this.props.blog.likes, isDisabled: false }

  componentDidMount(){
    this.props.fetchUser();
    // this.props.signin();

    if(this.props.auth.blogLikes.indexOf(this.props.blog._id) !== -1){
  
      this.setState({isDisabled: true});
    }
  }




  handleClick(blog){

    const { auth, login } = this.props;


    if(!auth && !login.authenticated){

      return window.location.assign('/login');
    }

    if(blog.userLikes.indexOf(auth) === -1){

      const token = localStorage.getItem('token');

      const headers = {
        Authorization: `Bearer ${token}`
      }

      axios.post(`/api/blog/${blog._id}/like`, {}, {headers: headers})
      .then(res => {
        this.setState({ likes: blog.likes + 1, isDisabled: true });
      })
      .catch(err => {
        console.log(err);
      });
    }


    
  }
  
  render(){

    const { blog } = this.props;
    const { likes, isDisabled } = this.state;
    
    return (
      <div> 
        <button disabled={isDisabled} onClick={() => this.handleClick(blog)} className="like-buttons">
          <i className="thumbs up outline icon"></i>
        </button>
        {likes}
      </div>
    )
  }
}

const mapStateToProps = ({ auth, login }) => { 

  console.log(auth);

  return { auth, login };
}

export default connect(mapStateToProps, { fetchUser, signin })(BlogLikes);