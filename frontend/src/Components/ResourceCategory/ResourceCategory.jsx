import React from "react";
import "./ResourceCategory.css";

function ResourceCategory(
  { title },
  { img },
  { altText },
  { text },
  { links }
) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt={altText} />
      <p>{altText}</p>
    </div>
  );
}

export default ResourceCategory;
