import React from "react";
import back from '../images/home-background.jpg'
import './Home.css'
import MetaTags from 'react-meta-tags';

/* Following this tutorial on adding meta tags for React https://www.npmjs.com/package/react-meta-tags */

function Home() {
  return (
    <div class="Homepage">
          <MetaTags>
          <title>Home</title>
          <meta name="description" content="Duncan Wilson Construction, Waterproofing and Construction Company in San Rafael"/>
          </MetaTags>
      <div
        class="bg_image" id={'home'}
        style={{
          backgroundImage: 'url('+back+')',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "auto",
          color: "#f5f5f5"
        }}
      >
      <div class="Heading">
      <p> Duncan Wilson Construction</p>
      <div class="subHead">
      <p> Over 40 years of experience in the Bay Area</p>
       </div>
       </div>
       </div>
       </div>
  );
}

export default Home;