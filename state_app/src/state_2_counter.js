import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <p>{this.props.name}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter name="This is A Counter"/>; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);