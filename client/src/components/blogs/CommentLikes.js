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
  
    if(this.props.auth === false){
      return window.location.assign('/login');
    }

    if(comment.userLikes.indexOf(this.props.auth) === -1){
      axios.post(`/api/comment/${comment._id}/like`)
      .then(res => {
        this.setState({ likes: comment.likes + 1, isDisabled: true });
      })
      .catch(err => {
        console.log(err);
      });
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