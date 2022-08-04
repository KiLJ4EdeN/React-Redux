import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Hello extends React.Component {
  state = {
    name: "Static James"
  }
  render() {
    return <h1>Hello {this.state.name}.</h1>;    
  }
}

const el = <Hello />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);