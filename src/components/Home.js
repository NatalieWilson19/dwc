import React from "react";
import back from '../images/home-background.jpg'
import './Home.css'
import { Helmet } from "react-helmet";

/* Following this tutorial on adding meta tags for React https://www.npmjs.com/package/react-meta-tags */
/*"Duncan Wilson Construction, Waterproofing and Construction Company in San Rafael"*/


//Reverted back

function Home() {
  return (
    <div class="Homepage">
          <Helmet titleTemplate="DWC" defaultTitle="DWC">
          <meta
          name="description"
          content="Duncan Wilson Construction, Waterproofing and Construction Company in San Rafael, Marin County, CA"
          />
          <meta name="keywords" content="Construction, Waterproofing, Water proofing, Tiling, Bay Area, San Rafael, Marin, Marin County, San Anselmo, DWC, dwcbuild, dwc construction, duncan wilson construction"/>
          <meta name="robots" content="User-agent: * Disallow: "/>
          </Helmet>
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
      <p> DWC</p>
      <div class="subHead">
      <p> Duncan Wilson Construction</p>
       </div>
       </div>
       </div>
       </div>
  );
}

export default Home;