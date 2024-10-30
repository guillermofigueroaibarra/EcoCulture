import React, { useState, useEffect } from "react";
import "./ImgGallery.css"; // Optional: for styling

const ImgGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer); // Clear timer on component unmount
  }, [images, interval]);

  return (
    <div className="img-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery Image ${index}`}
          className={`gallery-image ${index === currentIndex ? "active" : ""}`}
          style={{ opacity: index === currentIndex ? 1 : 0 }}
        />
      ))}
    </div>
  );
};

export default ImgGallery;
