import _ from 'lodash'
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import BlogField from './BlogField';
import formFields from './formFields';

class BlogForm extends Component {
  
  renderFields(){
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} component={BlogField} type="text" label={label} name={name} />
    })
  }
  
  render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onBlogSubmit)}>
          {this.renderFields()}
          <Link to="/blogs">Cancel</Link>
        </form> 
      </div>
    )
  }
}

export default reduxForm({
  form: 'blogForm'
})(BlogForm);