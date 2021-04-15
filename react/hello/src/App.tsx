import React, { useState } from 'react';
import logo from './microsoft.svg';
import './App.css';
import { ClickCounter } from './clickCounter';
import Switch from "react-switch";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Show counter:
        <Switch onChange={setShowCounter} checked={showCounter}/>
        {showCounter && <ClickCounter count={clickCount} setCount={setClickCount}/>}
      </header>
    </div>
  );
}

export default App;
