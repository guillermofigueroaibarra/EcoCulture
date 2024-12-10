import React from "react";
import "./BContent.css";
import ImgGallery from "../ImgGallery/ImgGallery";
import Table from "../Table/Table";
function BContent({
  images = [],
  interval = 3000,
  heading = "",
  text = "",
  tableText = [],
}) {
  // Destructure props as an object
  return (
    <div className="test1">
      <h1>{heading}</h1>
      <ImgGallery images={images} />
      <p className="BContentText">{text}</p>
      <h2>
        Businesses and Institutions in the DuPage County that might help you in
        your recycling journey
      </h2>
      <div className="tableformat">
        <Table rows={tableText} />
      </div>
    </div>
  );
}

export default BContent;
