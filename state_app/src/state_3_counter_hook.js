import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Counter(props) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }
  return <div>
  <p>{counter}</p>
  <p>{props.name}</p>
  <button onClick={increment}>Increment</button>
  </div>;
}

const el = <Counter name="Counter Argument" />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);