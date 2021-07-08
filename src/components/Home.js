import React from "react";
import back from '../../public/roofView.jpg'

/*TODO add a little more */

function Home() {
  return (
      <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+back+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
        <h1>Duncan Wilson Construction</h1>
        <h2>Over 40 years of experience in the Bay Area</h2>
      </div>
  );
}

export default Home;