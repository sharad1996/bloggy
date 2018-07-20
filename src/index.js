import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import { AUTHENTICATED_USER } from './ActionTypes/usersActionTypes';
import blogApp from './reducers';
import { rootLoad } from './sagas/rootSaga';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(blogApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootLoad);

//handling token session
const token = localStorage.getItem('token');
if( token == undefined ) {}
else{
  store.dispatch({ type: AUTHENTICATED_USER, token });
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
