import React from 'react';
import { connect } from 'react-redux';
import {formFields} from './formFields';
import { submitBlog } from '../../actions';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

const BlogFormReview = ({ onCancel, formValues, submitBlog, history }) => {
 
  const reviewFields = _.map(formFields, ({label, name}) => {

    // if(!label || !name){
    //   return <div>Loading...</div>;
    // }

    // return (
    //   <div className="ui form" key={name}>
    //     <label>{label}</label>
    //     <div>
    //       {formValues.values[name][0].name}
    //     </div>
    //   </div>
    // );
  });

  return (
    <div>
      <h5>Are you sure you want to post?</h5>
      {reviewFields}
      <button className="ui button red" onClick={onCancel}>Back</button>
      <button className="ui primary button" onClick={() => submitBlog(formValues, history)}>
        Confirm
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {

  return { formValues: state.form.blogForm.values }
}

export default connect(mapStateToProps, { submitBlog })(withRouter(BlogFormReview))