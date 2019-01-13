import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'
import { submitComment } from '../../actions';

class Comment extends Component {
  render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onCommentSubmit)}>
         <Field key={name} component="textarea" type="text" label="Comment" />
         <button onClick={() => submitComment(commentFormValues, history, id)}>
          Submit
         </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  commentForm: 'commentForm'
})(Comment);