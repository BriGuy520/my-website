import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { submitComment } from '../../actions';

class Comment extends Component {


  componentDidMount(){
    this.props.submitComment();
  }

  render(){
    return (
      <div>
        <label>Leave a Comment:</label>
        <form onSubmit={() => this.handleSubmit()}>
          <textarea   />
          <button  onClick={() => submitComment()}>
          Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  console.log(state.blogs);
  return { blogs: state.blogs };
}


export default connect(mapStateToProps, { submitComment })(withRouter(Comment));