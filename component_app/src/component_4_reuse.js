import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hello(props) {
  return <p>Hello, {props.name}!</p>;
}

function App() {
  return <div>
    <Hello name="David" />
    <Hello name="James" />
    <Hello name="Amy" />
  </div>;
}

const el = <App />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);