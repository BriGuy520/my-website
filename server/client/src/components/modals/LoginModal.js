import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { signin } from '../../actions';
import { Link } from 'react-router-dom';

class LoginModal extends Component {

  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/blog');
    });
  }

  render(){
    return ReactDOM.createPortal(
      <div className="ui dimmer modals visible active">
        <div onClick={(event) => event.stopPropagation()} className="ui standard modal visible active">
        <div className="modal">
          <div className="ui placeholder segment">
              <div className="ui two column very relaxed stackable grid">
                <div className="column" >
                  <form onSubmit={this.handleSubmit(this.onSubmit)}>
                    <div className="ui form">
                      <div className="field">
                        <label>Username</label>
                        <div className="ui left icon input">
                          <Field 
                            type="text" 
                            component="input"
                            autoComplete="none"
                            placeholder="Username" 
                          />
                          <i className="user icon"></i>
                        </div>
                      </div>
                      <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                          <Field
                            type="password" 
                            placeholder="Password" 
                            autoComplete="none"
                            component="input"
                          />
                          <i className="lock icon"></i>
                        </div>
                      </div>
                      <div className="login-buttons">
                        <div className="ui blue submit button">Login</div>
                      </div>
                      <div className="login-buttons">
                        <div className="ui lightgrey submit button">
                          <Link to="/signup">
                            Sign Up
                          </Link>
                        </div>
                      </div>    
                    </div>
                  </form>
                </div>
                <div className="middle aligned column">
                  <div className="column">
                    <div className="login-buttons">
                      <button className="ui twitter button">
                        <i className="twitter icon"></i>
                        <a href="/auth/twitter">Login with Twitter</a>
                      </button>
                    </div>
                    <div className="login-buttons">
                      <button className="ui google plus button">
                        <i className="google plus icon"></i>
                        <a href="/auth/google">Login with Google</a>
                      </button>
                    </div>
                    <div className="login-buttons">
                      <button className="ui facebook button">
                        <i className="facebook icon"></i>
                        <a href="/auth/facebook">Login with Facebook</a> 
                      </button>    
                    </div>
                    <div className="login-buttons github">
                      <button className="ui github button green">
                        <i className="github icon"></i>
                        <a href="/auth/github">Login with Github</a> 
                      </button>    
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui vertical divider">
                Or
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}

const mapStateToProps = (state) => {
  
}

export default compose(connect(mapStateToProps, { signin }), reduxForm({ form: 'signin' }))(LoginModal);