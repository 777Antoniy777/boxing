import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import {StoreProvider} from "easy-peasy";

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById(`root`)
);