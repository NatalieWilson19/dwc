import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";


/* Explanation for why rel="noopener" is important: https://mathiasbynens.github.io/rel-noopener/#hax */

/*TODO change font of name */

/* For now, the only way I can get the formatting to work when the website is deployed is by doing this inline styling.
Not the best or cleanest solution but okay for right now */
function NavMenu() {

  return (
    <div className="navigation">
    <Navbar>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end" fixed="top">
        <Nav.Link href="#home" class="ml-auto" style={{ 
          color:"grey",
          "font-family": "montserrat, sans-serif",
          "font-size": "14px",
          "letter-spacing": "2px",
          "text-transform": "uppercase",
          }}>Home</Nav.Link>
        <Nav.Link href="#services" id="services-id" class="ml-auto" style={{ 
          color:"grey",
          "font-family": "montserrat, sans-serif",
          "font-size": "14px",
          "letter-spacing": "2px",
          "text-transform": "uppercase",
          }}>Services</Nav.Link>
        <Nav.Link href="#about" id="about-id" class="ml-auto" style={{ 
          color:"grey",
          "font-family": "montserrat, sans-serif",
          "font-size": "14px",
          "letter-spacing": "2px",
          "text-transform": "uppercase",
          }}>About</Nav.Link>
        <Nav.Link href="#contact" id="contact-id" class="ml-auto" style={{ 
          color:"grey",
          "font-family": "montserrat, sans-serif",
          "font-size": "14px",
          "letter-spacing": "2px",
          "text-transform": "uppercase",
          }}>Contact</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
export default NavMenu