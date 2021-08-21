import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import firstImg from '../images/home-background.jpg'

/*
const slider = (
  <AwesomeSlider
    media={[
      {
        source: '../content/gallery/20190620_114040.jpg',
      },
      {
        source: '../content/gallery/20190620_114040.jpg',
      },
      {
        source: '../content/gallery/20190620_114040.jpg',
      },
    ]}
  />
);*/

const images = [
  {
    photo: 'https://picsum.photos/id/1019/1000/600/',
  },
  {
    photo: '../content/gallery/20190620_114040.jpg',
  },
  {
    photo: '../content/gallery/20190620_114040.jpg',
},
]

function Gallery() {
  return(
    <AwesomeSlider>
      <div class="gallery-page">
        <img src="file://../src/content/gallery/firstImage.jpg" alt="first"></img>
      </div>

    </AwesomeSlider>
    /*<AwesomeSlider
    media={images}
  >
    <img src="../content/gallery/20190620_114040.jpg" alt="sec"/>
    <img src="../content/gallery/20190620_114040.jpg" alt="thrid"/>
    </AwesomeSlider>*/
  );
}
export default Gallery;