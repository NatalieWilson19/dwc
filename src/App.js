import React from 'react';
import './App.css';
import Home from './components/Home.js'
import NavMenu from './components/NavMenu.js'
import Services from './components/Services'

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Home />
      <Services />
    </div>
  );
}

export default App;