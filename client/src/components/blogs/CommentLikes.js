import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';
import axios from 'axios';

class CommentLikes extends Component {
  

  state = { likes: this.props.comment.likes, isDisabled: false };

  componentDidMount(){
    this.props.fetchUser();
  }

  handleClick(comment){ 
    if(comment.userLikes.indexOf(this.props.auth) === -1 && this.props.auth !== false){
      axios.post(`/api/comment/${comment._id}/like`)
      .then(res => {
        this.setState({ likes: this.props.comment.likes + 1, isDisabled: true });
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      return window.location.assign('http://www.brithedevguy.com/login');
    }

    
  }
  
  render(){
    const { comment } = this.props;
    const { likes, isDisabled } = this.state;
    
    return (
      <div>
        <button disabled={isDisabled} onClick={() => this.handleClick(comment)} className="like-buttons">
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

export default connect(mapStateToProps, { fetchUser })(CommentLikes);