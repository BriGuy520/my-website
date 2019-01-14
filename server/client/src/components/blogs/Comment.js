import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'
import { submitComment } from '../../actions';

const Comment = ({ blogId, commentFormValues, submitComment, history, handleSubmit }) => {
  return (
    <div>
      <label>Leave a Comment:</label>
      <form onSubmit={handleSubmit}>
        <Field key={blogId} component="textarea" value={commentFormValues} type="text" label="Comment" />
        <button onClick={() => submitComment(commentFormValues, history, blogId)}>
        Submit
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state.form.commentForm);
  return { commmentFormValues: state.form.commentForm }
}

const CommentForm = reduxForm({
  form: 'commentForm'
})(Comment);

export default connect(mapStateToProps, { submitComment })(CommentForm);