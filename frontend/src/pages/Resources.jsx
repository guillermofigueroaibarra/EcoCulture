// Import required libraries and assets
import React, { useState } from "react";
import "./PagesStyles/Resources.css";
import PicBubbles from "../Components/PicBubbles/PicBubbles";
import plastics from "../assets/plastics.jpeg";
import paper from "../assets/paper.jpg";
import glass from "../assets/glass.jpg";
import metals from "../assets/metals.jpg";
import electronics from "../assets/electronics.jpg";
import textiles from "../assets/textiles.jpg";
import BContent from "../Components/BContent/BContent";
import recycleinfo from "./WebsiteText/recycleinfo.json";
const Resources = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null); // Track selected material
  const imagelist = [paper, plastics, metals];

  // Event handler to set selected material
  const handleImageClick = (material) => {
    setSelectedMaterial(material);
  };

  // Map selected material to corresponding component
  const renderSelectedComponent = () => {
    switch (selectedMaterial) {
      case "Paper":
        return (
          <BContent
            images={imagelist}
            heading="Paper"
            text={recycleinfo.plastic}
          ></BContent>
        );
      case "Plastics":
        return (
          <BContent
            images={imagelist}
            heading="Plastic"
            text="Your descriptive text here"
          ></BContent>
        );
      case "Glass":
        return <GlassInfo />;
      case "Metals":
        return <MetalsInfo />;
      case "Electronics":
        return <ElectronicsInfo />;
      case "Textiles":
        return <TextilesInfo />;
      default:
        return null;
    }
  };

  return (
    <div>
      {!selectedMaterial ? (
        <>
          <h1>Learn About Recycle Types</h1>
          <p id="maintext">{recycleinfo.resourceIntro}</p>

          <div className="rows">
            <div className="cols" onClick={() => handleImageClick("Paper")}>
              <h2>Paper and Cardboard</h2>
              <PicBubbles img={paper} altText="Paper and Cardboard" />
            </div>
            <div className="cols" onClick={() => handleImageClick("Plastics")}>
              <h2>Plastics</h2>
              <PicBubbles img={plastics} altText="Plastics" />
            </div>
            <div className="cols" onClick={() => handleImageClick("Glass")}>
              <h2>Glass</h2>
              <PicBubbles img={glass} altText="Glass" />
            </div>
          </div>
          <div className="rows">
            <div className="cols" onClick={() => handleImageClick("Metals")}>
              <h2>Metals</h2>
              <PicBubbles img={metals} altText="Metals" />
            </div>
            <div
              className="cols"
              onClick={() => handleImageClick("Electronics")}
            >
              <h2>Electronics (E-waste)</h2>
              <PicBubbles img={electronics} altText="Electronics" />
            </div>
            <div className="cols" onClick={() => handleImageClick("Textiles")}>
              <h2>Textiles</h2>
              <PicBubbles img={textiles} altText="Textiles" />
            </div>
          </div>
        </>
      ) : (
        <div className="material-content">
          {/* Render the selected component based on clicked bubble */}
          {renderSelectedComponent()}
          <button
            onClick={() => setSelectedMaterial(null)}
            className="backButton"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Resources;
