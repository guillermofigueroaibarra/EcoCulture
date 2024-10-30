import React from "react";
import "./BContent.css";
import ImgGallery from "../ImgGallery/ImgGallery";

function BContent({ images, interval = 3000, heading, text }) {
  // Destructure props as an object
  return (
    <div>
      <h1>{heading}</h1>
      <ImgGallery images={images} />
      <p className="BContentText">{text}</p>
    </div>
  );
}

export default BContent;
