import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* I used this website: https://getwaves.io/ to generate the svg code to create the wave */

/* Explanation for why rel="noopener" is important: https://mathiasbynens.github.io/rel-noopener/#hax */

/*TODO change font of name */

function NavMenu() {

  return (
    <div>
        <Navbar className="navigation" expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="#services" id="services-id">Services</Nav.Link>
            <Nav.Link href="#contact" id="contact-id">Contact</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavMenu