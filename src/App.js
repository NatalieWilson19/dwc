import React from 'react';
import loadable from '@loadable/component'
import './App.css';
import Home from './components/Home.js'
import NavMenu from './components/NavMenu.js'
import Services from './components/Services.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
const Gall = loadable(() => import('./components/Gall.js'))


/* Apparently since Gatsby handles routing for you, it dislikes you trying to use 'react-router-dom' so I'll remove
and see it it fixes
https://github.com/gatsbyjs/gatsby/issues/12706 */

function App() {
  return (
    <div className="App-Router">
      <NavMenu />
      <Home />
      <Services />
      <About />
      <Gall />
      <Contact />

    </div>
  );
}

export default App;