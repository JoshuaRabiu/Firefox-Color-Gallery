import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { store } from './reducers/index';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
