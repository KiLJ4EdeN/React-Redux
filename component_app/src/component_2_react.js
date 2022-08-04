import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Hello extends React.Component {
  render() {
    return <h1>Hello world From React Component</h1>;
  }
}

const el = <Hello />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);