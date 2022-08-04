import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hello(props) {
  return <p>Hello, {props.name}!</p>;
}

const el = <Hello name="David" />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);