import React from "react";
import './Contact.css'

function Contact() {
    return(
        <div className="title" id="contact" display="block">
            <p>
                Want to get in touch?
            </p>
        <div className="body">
            <p> Send me an email or reach out to me on LinkedIn</p>
            <a href="mailto:nataliewilson519@gmail.com" target="_blank" rel="noopener noreferrer" />
        </div>
        </div>

    );
}

export default Contact;