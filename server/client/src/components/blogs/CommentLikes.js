import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';
import axios from 'axios';

class CommentLikes extends Component {

  state = { likes: this.props.comment.likes };


  componentDidMount(){
    this.props.fetchUser();
  }

  handleClick(comment){ 
    if(comment.userLikes.indexOf(this.props.auth) === -1){
      axios.post(`/api/comment/${comment._id}/like`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        return window.location.replace('/login');
      });
    } else {
      console.log('You already liked that post');
    }

    this.setState({ likes: this.props.comment.likes + 1 });
  }
  
  render(){
    const { comment } = this.props;
    const { likes } = this.state;
    return (
      <div>
        <button onClick={() => this.handleClick(comment)} className="like-buttons">
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