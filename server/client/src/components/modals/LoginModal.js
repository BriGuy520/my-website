import React from 'react';
import ReactDOM from 'react-dom';

const LoginModal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div onClick={() => event.stopPropigation()} className="ui standard modal visible active">
        <div className="ui placeholder segment" >
          <div className="ui two very relaxed stackable grid">
            <div className="middle aligned column">
              <div className="ui facebook button"><i class="facebook icon"></i></div>
              <div className="ui google plus button"><i class="google plus icon"></i></div>
              <div className="ui twitter button"><i class="twitter icon"></i></div>
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