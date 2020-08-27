import React from 'react';
import './App.css';
import NavBar from './components/NavBar/index';
import Welcome from './components/Welcome/index';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Welcome name="Juli" />;
      </header>
    </div>
  );
}

export default App;
