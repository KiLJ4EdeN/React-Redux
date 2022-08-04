import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hello() {
  return <h1>Hello world.</h1>;
}

const el = <Hello />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);