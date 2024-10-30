import "./PicBubbles.css";

import React from "react";

const PicBubbles = ({ img, altText = "Image" }) => {
  return <img src={img} alt={altText} class="blubblepic" />;
};

export default PicBubbles;
