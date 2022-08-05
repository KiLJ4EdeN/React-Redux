import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';
import './style.css';

const initialState = {
  count: 0
};
// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    default:
      return state;
  }
}

const store = createStore(reducer);
const el = <Provider store={store}>
          <Counter/>
        </Provider>; 

ReactDOM.render(
  el, 
  document.getElementById('root')
);