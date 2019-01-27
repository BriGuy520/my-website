import React from 'react';
import ReactDOM from 'react-dom';

const LoginModal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div onClick={(event) => event.stopPropigation()} className="ui standard modal visible active">
        <div className="ui placeholder segment" >
          <div className="ui two very relaxed stackable grid">
            <div className="middle aligned column">
              <div className="login-buttons">
                <button className="ui facebook button">
                  <i className="facebook icon"></i>
                  <a href="/auth/facebook">Login with Facebook</a> 
                </button>    
              </div>
              <div className="login-buttons">
                <button className="ui google plus button">
                  <i className="google plus icon"></i>
                  <a href="/auth/google">Login with Google</a>
                </button>
              </div>
              <div className="login-buttons">
                <button className="ui twitter button">
                  <i className="twitter icon"></i>
                  <a href="/auth/twitter">Login with Twitter</a>
                </button>
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

export default LoginModal;