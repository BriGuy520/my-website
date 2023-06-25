import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, signin } from '../../actions/index';
import axios from 'axios';

class BlogLikes extends Component {

  state = { likes: this.props.blog.likes, isDisabled: false }

  componentDidMount(){
    this.props.fetchUser();
    // this.props.signin();

    const { auth, blog } = this.props;


    if(auth !== "please sign in"){

      if(blog.userLikes.includes(auth._id)){
    
        this.setState({isDisabled: true});
      }
    }

  }




  handleClick(blog){

    const { auth, login } = this.props;


    if(auth === "please sign in" && !login.authenticated){

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

    const { auth, blog } = this.props;
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


  return { auth, login };
}

export default connect(mapStateToProps, { fetchUser, signin })(BlogLikes);