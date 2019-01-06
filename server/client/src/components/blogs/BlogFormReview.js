import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { submitBlog } from '../../actions';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

const BlogFormReview = ({ onCancel, formValues, submitBlog, history }) => {

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button onClick={onCancel}>Back</button>
      <button onClick={() => submitBlog(formValues, history)}>
        Confirm
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { formValues: state.form.blogForm.values }
}

export default connect(mapStateToProps, { submitBlog })(withRouter(BlogFormReview))