import React from 'react';
import './App.css';

import Welcome from './components/Welcome/index';
import Counter from './components/Counter/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="User" />
      </header>
      <Counter/>
    </div>
  );
}

export default App;
