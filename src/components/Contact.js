import React from "react";
import './Contact.css'

function Contact() {
    return(
        <div className="body">
        <div className="title" id="contact" display="block">
            <p>
                Contact Us
            </p>
        <div className="text">
            <p> Contact us for any of your waterpoofing needs </p>
            <a href="mailto:dwcbuild@gmail.com" target="_blank" rel="noopener noreferrer" />
        </div>
        </div>
        </div>
    );
}

export default Contact;