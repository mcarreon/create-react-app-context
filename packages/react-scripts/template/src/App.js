import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ExampleProvider } from './utils/contexts/exampleContext';
import Form from './components/form';

//wrap app with example provider to expose to state
function App() {


  return (
    <ExampleProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Form />
        </header>
      </div>
    </ExampleProvider>
  );
}

export default App;
