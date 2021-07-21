import React from "react";
import './Contact.css'
import Location from '../images/icons8-marker-96.png'
import Phone from '../images/icons8-phone-100.png'
import Mail from '../images/icons8-marker-100.png'
import MetaTags from 'react-meta-tags';

function Contact() {
    return(
        <div className="body">
          <MetaTags>
          <title>Contact</title>
          <meta name="description" content="Contact Us! We work all over the Bay Area, including San Francisco, San Rafael, San Anselmo, Tiburon, Mill Valley, Novato, Fairfax, Sausalito, Ross, Corte Madera, Petaluma, Richmond, Berkeley and Oakland"/>
          </MetaTags>
        <div className="title" id="contact" display="block">
            <p>
                Contact Us
            </p>

        <div className="subtext">
            <p> Contact us for any of your waterpoofing needs. We are based in San Rafael, CA and are available for work in Marin and Sonoma County, San Francisco, and the East Bay. </p>
            </div>
            </div>
        <div className="whereContact">
        
            <p> <img src={Location} className="location-icon" alt="location"></img>Based in San Rafael, CA</p>
            <p> <img src={Phone} className="phone-icon" alt="phone"></img>Call at (415) 302 5542</p>
            <p> <img src={Mail} className="mail-icon" alt="mail"></img>Email dwcbuild@gmail.com or click <a href="mailto:dwcbuild@gmail.com" target="_blank" rel="noopener noreferrer"> here </a> </p>
        </div>
        </div>
    );
}

export default Contact;