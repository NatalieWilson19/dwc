import React from "react";
import './About.css'
import Check from '../images/icons8-checkmark-96.png'

<meta name="description" content="Experience Builders with understanding of both general consturction and specalized knowledge in waterproofing."></meta>

function About() {
    return (

        <div className="about-page"  id={'about'}>
            <div className="checklist">
            <div className="checklist-item">
            <img src={Check} className="check-icon" alt="check"></img>
                <p> Fully Insured and Licensed</p>
            </div>
            <div className="checklist-item">
            <img src={Check} className="check-icon" alt="check"></img>
                <p> Family Owned and Operated</p>
            </div>
            <div className="checklist-item">
            <img src={Check} className="check-icon" alt="check"></img>
                <p> Wide Array of Services Offered
                </p>
            </div>
            <div className="checklist-item">
            <img src={Check} className="check-icon" alt="check"></img>
                <p> Decades of Experience
                </p>
            </div>
            </div>
            <div className="about-title">
                <p> About Us</p>
            <div className="about-text">
                <p>We are a general contracting firm that’s been in business for 26 years. We specialize in waterproofing but do a wide variety of services for our clients. The owner has almost 50 years of experience in construction and has a strong background in all phases of residential construction.</p>
                <p> Our knowledge and experience in the building trade enable us to bring added value to any waterproofing job. Our areas of expertise are decks over living space, carports, foundations/foundation walls, and shower pans.  We are skilled in demolition, the layout of drains, slope, and flashing details.</p>
            </div>
        </div>
        </div>        

    );
}

export default About;