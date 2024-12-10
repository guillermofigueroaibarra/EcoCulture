import React from "react";
import "./AContent.css"; // Updated CSS file for AContent
import ImgGallery from "../ImgGallery/ImgGallery"; // Assuming this is a gallery component

function AContent({
  images = [],
  interval = 50,
  heading = "",
  text = "",
  date = "",
}) {
  return (
    <div className="aContent-container">
      <div className="aContent-row">
        {/* Right Column: Title, Text, and Table */}
        <div className="aContent-text">
          <h1>{heading}</h1>
          <p className="aContent-description">{text}</p>
          <br />
          <p>{date}</p>
        </div>

        {/* Left Column: Gallery */}
        <div className="aContent-gallery">
          <ImgGallery images={images} />
        </div>
      </div>
    </div>
  );
}

export default AContent;
