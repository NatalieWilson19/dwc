import React from 'react';
import './App.css';
import Home from './components/Home.js'
import NavMenu from './components/NavMenu.js'
import Services from './components/Services.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import Gall from "./components/Gall.js"


function App() {
  return (
    <div className="App">
      <NavMenu />
      <Home />
      <Services />
      <About />
      <Contact />
      <Gall />
    </div>
  );
}

export default App;