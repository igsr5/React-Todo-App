import React from 'react';
import './App.css';

//@ts-ignore
import logo from '../assets/imgs/logo.svg';

const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="/task">Task</a>
      </header>
    </div>
  );
}

export default App;
