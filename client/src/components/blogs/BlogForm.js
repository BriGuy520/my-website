import _ from 'lodash'
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
// import MyEditor from './MyEditor';
import BlogField from './FileInput';
import {formFields} from './formFields';

class BlogForm extends Component {

  renderFields(){
    return _.map(formFields, ({ label, name }) => {
      if(label !== "Body"){
        return <Field key={name} component={BlogField} label={label} name={name} />
      }

      // return <Field key={name} component={MyEditor} type="text" label={label} name={name} />
     
    })
  }
  
  render(){
    return (
      <div className="ui form">
        <form onSubmit={this.props.handleSubmit(this.props.onBlogSubmit)}>
          {this.renderFields()}
          <div className="form-buttons">
            <Link className="ui button red" to="/blog">Cancel</Link>
            <button className="ui primary button" type="submit">Submit</button>
          </div>
        </form> 
      </div>
    )
  }
}

export default reduxForm({
  form: 'blogForm'
})(BlogForm);