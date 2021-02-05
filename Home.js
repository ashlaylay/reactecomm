import React from "react";
import ImageSlider from "../../Components/ImageSlider";

function Home() {
  return (
    <div>
      {/*navbar*/}
      <nav>
        <ul>
          <li>
            <a href="Home.js">Home</a>
          </li>
          <li>
            <a href="Products.js">Products</a>
          </li>
          <li>
            <a href="Contact.js">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="header">
        <h1>Styles by Ashley</h1>
      </div>
      {/*slider*/}
      <ImageSlider />

      {/*footer*/}
      <footer>Copyright 2021. All rights reserved.</footer>
    </div>
  );
}

export default Home;
