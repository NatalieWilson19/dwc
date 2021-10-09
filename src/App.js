import React from 'react';
import './App.css';
import Home from './components/Home.js'
import NavMenu from './components/NavMenu.js'
import Services from './components/Services.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import Gall from "./components/Gall.js"



/* Apparently since Gatsby handles routing for you, it dislikes you trying to use 'react-router-dom' so I'll remove
and see it it fixes
https://github.com/gatsbyjs/gatsby/issues/12706 */

function App() {
  return (
    <div className="App-Router">
      <NavMenu />
      <Home />
<<<<<<< HEAD
            <Services />
            <About />
            <Contact />
=======
      <Services />
      <About />
      <Contact />
      <Gall />
>>>>>>> gallery
    </div>
  );
}

export default App;