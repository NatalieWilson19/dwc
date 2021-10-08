import React from "react";
import './Services.css'
import Water from '../images/icons8-water-64.png'
import Foundation from '../images/icons8-foundation-100.png'
import Building from '../images/icons8-building-64.png'
import { Helmet } from "react-helmet";

/*<a target="_blank" href="https://icons8.com/icons/set/link">Link icon</a> icon by <a target="_blank" 
href="https://icons8.com">Icons8</a> */
/*We Provide Services such as Waterproofing for decks, foundations, and general construction.*/

function Services() {
    return (

        <div className="services-page" id={'services'}>
        <div className="section-title" display={'block'}>
        <Helmet>
          <title>Services</title>
          <meta
          name="description"
          content="waterproofing for walking decks such as urethane decks, neoprene decks that serve as a pre-proof undertile and concrete, and floating wooden decks."
          />
          </Helmet>
            <p> Services </p>
            <div class="wrapper">
            <div className="service-title">
                <img src={Water} className="water-icon" alt="water"></img>
                <p> Waterproofing for Decks </p>
                    <div className="description">
                        <p> We provide waterproofing for walking decks such as urethane decks, neoprene decks that serve as a pre-proof undertile and concrete, and floating wooden decks.
                        </p>
                    </div>
            </div>

            <div className="service-title">
            <img src={Foundation} className="found-icon" alt="found"></img>

                <p> Waterproofing for Foundations </p>
                    <div className="description">
                        <p> We provide waterproofing for foundations using a variety of products such as neoprene.
                        </p>
                    </div>
            </div>
            <div className="service-title">
            <img src={Building} className="build-icon" alt="build"></img>

                <p> General Construction </p>
                    <div className="description">
                        <p> We provide a variety of general construction services such as rot repair, tiling, and building decks.
                        </p>
                    </div>
            </div>
            </div>
        </div>
        </div>

    );
}

export default Services;