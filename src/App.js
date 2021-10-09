import React from 'react';
import './App.css';
import Home from './components/Home.js'
import NavMenu from './components/NavMenu.js'
import Services from './components/Services.js'
import Contact from './components/Contact.js'
import About from './components/About.js'


/* Apparently since Gatsby handles routing for you, it dislikes you trying to use 'react-router-dom' so I'll remove
and see it it fixes */
function App() {
  return (
    <div className="App-Router">
      <NavMenu />
      <Home />
            <Services />
            <Services />
            <About />
            <About />
            <Contact />
          <Contact />

    </div>
  );
}

export default App;