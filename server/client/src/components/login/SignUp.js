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
        <div className="ui form">
          <div className="field">
            <fieldset>
              <label>Username</label>
              <Field
                name="username"
                type="text"
                component="input"
                autoComplete="none"
              />
            </fieldset>
            <fieldset>
              <label>Password</label>
              <Field 
                name="password"
                type="password"
                component="input"
                autoComplete="none"
              />
            </fieldset>
            <div>
              {this.props.errorMessage}
            </div>
          </div>
        </div>
        <button className="ui button green">Sign Up</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.login.errorMessage }
}

export default compose(connect(mapStateToProps, { signup }), reduxForm({ form: 'signup' }))(SignUp);