import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import HttpsRedirect from 'react-https-redirect';
import App from './components/App';
import reducers from './reducers';


const store = createStore(reducers, { login: { authenticated: localStorage.getItem('token') }}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <HttpsRedirect>
    <Provider store={store}>
        <App />
    </Provider>
  </HttpsRedirect>, 
  document.getElementById('root'));

