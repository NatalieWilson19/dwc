import React from 'react';
import {BrowserRouter, Switch, Route, HashRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import NavMenu from './components/NavMenu.js'
import Services from './components/Services.js'
import Contact from './components/Contact.js'
import About from './components/About.js'

function App() {
  return (
    <HashRouter>
    <div className="App-Router">
      <NavMenu />
      <Route exact path={["/home", "/"]}>
      <Home />
      </Route>
          <Route exact path="/services" >
            <Services />
            </Route>
            <Services />
            <Route path="/about">
            <About />
            </Route>
            <About />
            <Route path="/contact">
            <Contact />
          </Route>
          <Contact />

    </div>
    </HashRouter>
  );
}

export default App;