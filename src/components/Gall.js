import React from "react";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import "./Gallery.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image1 from "../content/gallery/image1_1.jpeg";
import image2 from "../content/gallery/image2.jpeg";
import image3 from "../content/gallery/image3.jpeg";
import image4 from "../content/gallery/image4.jpeg";
import image5 from "../content/gallery/image5.jpeg";
import image6 from "../content/gallery/image6.jpg";
import image7 from "../content/gallery/image7.jpeg";
import image8 from "../content/gallery/image8.jpg";
import image9 from "../content/gallery/image9.jpeg";
import image10 from "../content/gallery/image10.jpeg";
import image11 from "../content/gallery/image11.jpeg";
import image12 from "../content/gallery/image12.jpeg";
import image13 from "../content/gallery/image13.jpeg";
import image14 from "../content/gallery/image14.jpeg";
import image15 from "../content/gallery/image15.jpeg";
import image16 from "../content/gallery/image16.jpeg";


function Gall() {
  return (
      <div className="gallery-page"  id={'gallery'}>
        <Splide
          options={ {
            type: 'loop',
            width: '100wv',
            height: '100vh',
            cover: 'true',
            heightRatio: '1',
            } }>
              <SplideSlide>
                  <img src={image13} alt="connor sanding in sausalito"/>
              </SplideSlide>              
              <SplideSlide>
                  <img src={image14} alt="finished deck"/>
              </SplideSlide>              
              <SplideSlide>
                  <img src={image15} alt="finihsed deck 2"/>
              </SplideSlide>          
            <SplideSlide>
                  <img src={image1} alt="garrison tiling"/>
              </SplideSlide>

              <SplideSlide>
                  <img src={image3} alt="garrison tiling 2"/>
              </SplideSlide>
              <SplideSlide>
                  <img src={image4} alt="fireplace"/>
              </SplideSlide>              
              <SplideSlide>
                  <img src={image5} alt="redwood deck railing"/>
              </SplideSlide> 
              <SplideSlide>
                  <img src={image16} alt="redwood deck"/>
              </SplideSlide>
              <SplideSlide>
                  <img src={image2} alt="grey polyurethane"/>
              </SplideSlide>
              <SplideSlide>
                  <img src={image6} alt="two trucks"/>
              </SplideSlide>              
              <SplideSlide>
                  <img src={image7} alt="connor rolling wetsuit"/>
              </SplideSlide>              
              <SplideSlide>
                  <img src={image8} alt="house from afar"/>
              </SplideSlide>              
              <SplideSlide>
                  <img src={image9} alt="uretane deck"/>
              </SplideSlide>              
              <SplideSlide>
                  <img src={image10} alt="urethane and roller"/>
              </SplideSlide>              
              <SplideSlide>
                  <img src={image11} alt="plasticed off job"/>
              </SplideSlide>              
              <SplideSlide>
                  <img src={image12} alt="grey deck and railing"/>
              </SplideSlide>                 

        </Splide>
        </div>
  );
}
export default Gall;
