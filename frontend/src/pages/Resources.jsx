// Import required libraries and assets
import React, { useState } from "react";
import "./PagesStyles/Resources.css";
import PicBubbles from "../Components/PicBubbles/PicBubbles";
import plastics from "../assets/plastics.jpeg";
import paper from "../assets/paper.png";
import glass from "../assets/glass.jpg";
import metals from "../assets/metals.jpg";
import electronics from "../assets/electronics.jpg";
import textiles from "../assets/textiles.jpg";
import BContent from "../Components/BContent/BContent";
import recycleinfo from "./WebsiteText/recycleinfo.json";

// slideshow images
import paper1 from "../assets/Resources/paper1.jpg";
import paper2 from "../assets/Resources/paper2.jpg";
import paper3 from "../assets/Resources/paper3.jpg";
import plastic1 from "../assets/Resources/plastic1.jpg";
import plastic2 from "../assets/Resources/plastic2.jpg";
import plastic3 from "../assets/Resources/plastic3.jpg";
import glass1 from "../assets/Resources/glass1.jpg";
import glass2 from "../assets/Resources/glass2.png";
import glass3 from "../assets/Resources/glass3.jpg";
import metal1 from "../assets/Resources/metal1.jpg";
import metal2 from "../assets/Resources/metal2.jpg";
import metal3 from "../assets/Resources/metal3.jpg";
import ewaste1 from "../assets/Resources/ewaste1.jpg";
import ewaste2 from "../assets/Resources/ewaste2.jpg";
import ewaste3 from "../assets/Resources/ewaste3.jpg";
import textile1 from "../assets/Resources/textile1.jpg";
import textile2 from "../assets/Resources/textile2.jpg";
import textile3 from "../assets/Resources/textile3.png";

const Resources = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null); // Track selected material
  // list of images for slideshows
  const paperimgs = [paper1, paper2, paper3];
  const plasticimgs = [plastic1, plastic2, plastic3];
  const glassimgs = [glass1, glass2, glass3];
  const metalsimgs = [metal1, metal2, metal3];
  const electronicsimgs = [ewaste1, ewaste2, ewaste3];
  const textitlesimgs = [textile1, textile2, textile3];

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
            images={paperimgs}
            heading="Paper and Cardboard"
            text={recycleinfo.paper_cardboard}
            tableText={recycleinfo.table1}
          ></BContent>
        );
      case "Plastics":
        return (
          <BContent
            images={plasticimgs}
            heading="Plastics"
            text={recycleinfo.plastics}
            tableText={recycleinfo.table2}
          ></BContent>
        );
      case "Glass":
        return (
          <BContent
            images={glassimgs}
            heading="Glass"
            text={recycleinfo.glass}
            tableText={recycleinfo.table3}
          ></BContent>
        );
      case "Metals":
        return (
          <BContent
            images={metalsimgs}
            heading="Metals"
            text={recycleinfo.metals}
            tableText={recycleinfo.table4}
          ></BContent>
        );
      case "Electronics":
        return (
          <BContent
            images={electronicsimgs}
            heading="Electronics (E-waste)"
            text={recycleinfo.electronics}
            tableText={recycleinfo.table5}
          ></BContent>
        );
      case "Textiles":
        return (
          <BContent
            images={textitlesimgs}
            heading="Testiles"
            text={recycleinfo.textiles}
            tableText={recycleinfo.table6}
          ></BContent>
        );
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
