import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';
import axios from 'axios';

class BlogLikes extends Component {

  state = { likes: this.props.blog.likes, isDisabled: false }

  componentDidMount(){
    this.props.fetchUser();
  }

  handleClick(blog){

    if(this.props.auth === false){
      return window.location.assign('http://www.brithedevguy.com/login');
    }


    if(blog.userLikes.indexOf(this.props.auth) === -1){
      axios.post(`/api/blog/${blog._id}/like`)
      .then(res => {
        this.setState({ likes: this.props.blog.likes + 1, isDisabled: true });
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

const mapStateToProps = ({ auth }) => { 
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(BlogLikes);