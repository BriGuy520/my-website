import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signup } from '../../actions';


class SignUp extends Component {

  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('/blog');
    });
  }

  render(){

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className="ui form signup-form">
          <div className="field">
              <label>First Name</label>
              <Field
                name="firstName"
                type="text"
                component="input"
                autoComplete="none"
              />
              <label>Last Name</label>
              <Field
                name="lastName"
                type="text"
                component="input"
                autoComplete="none"
              />
              <label>Username</label>
              <Field
                name="username"
                type="text"
                component="input"
                autoComplete="none"
              />
              <label>Password</label>
              <Field 
                name="password"
                type="password"
                component="input"
                autoComplete="none"
              />
                 <label>Confirm Password</label>
              <Field 
                name="confirm-password"
                type="password"
                component="input"
                autoComplete="none"
              />
              <div className="signup-btns">
                <button className="ui button green signup-btn">Sign Up</button>
                <button className="ui button blue signup-btn"><a href="/">Cancel</a></button>
              </div>
            <div>
              {this.props.errorMessage}
            </div>
          </div>
        </div>
       
      </form>
    );
  }
}

const mapStateToProps = (state) => {
 
  return { errorMessage: state.login.errorMessage }
}

export default compose(connect(mapStateToProps, { signup }), reduxForm({ form: 'signup' }))(SignUp);