import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';
import axios from 'axios';

class BlogLikes extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  handleClick(blog){
    if(blog.userLikes.indexOf(this.props.auth) === -1){
      axios.post(`/api/blog/${blog._id}/like`)
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
          return window.location.replace('/login');
        });
    } else {
      console.log('You already liked that post silly, hehehe');
    }
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

const mapStateToProps = ({ auth }) => {
  
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(BlogLikes);