'use strict';

// import babel-polyfill
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { initImages } from './actions/index.js';
import rootReducers from './reducers/index.js';
import App from './app';

import IMAGES from '../../mock';

let store = createStore(rootReducers);

const { dispatch, subscribe } = store;
// dispatch initImages action
dispatch(initImages(IMAGES));

subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
