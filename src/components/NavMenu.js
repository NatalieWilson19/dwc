import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";


/* Explanation for why rel="noopener" is important: https://mathiasbynens.github.io/rel-noopener/#hax */

/*TODO change font of name */

function NavMenu() {

  return (
    <div className="navigation">
    <Navbar>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end" fixed="top">
        <Nav.Link href="#home" class="ml-auto" >Home</Nav.Link>
        <Nav.Link href="#services" id="services-id" class="ml-auto" style={{ color:`grey` }}>Services</Nav.Link>
        <Nav.Link href="#about" id="about-id" class="ml-auto">About</Nav.Link>
        <Nav.Link href="#contact" id="contact-id" class="ml-auto">Contact</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
export default NavMenu