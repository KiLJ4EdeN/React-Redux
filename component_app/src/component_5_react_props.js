import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Hello extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

const el = <Hello name="React Props" />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);