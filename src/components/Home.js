import React from "react";
import back from '../../public/roofView.jpg'
import './Home.css'
/*TODO add a little more */

function Home() {
  return (
      <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+back+')',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "100%",
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

  );
}

export default Home;