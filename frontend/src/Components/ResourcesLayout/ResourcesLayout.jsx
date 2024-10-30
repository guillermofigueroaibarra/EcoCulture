import React from "react";
import "./ResourcesLayout.css";
import paper from "../../assets/paper.jpg";
import plastics from "../../assets/plastics.jpeg";
import glass from "../../assets/glass.jpg";
import metals from "../../assets/metals.jpg";
import electronics from "../../assets/electronics.jpg";
import textitles from "../../assets/textiles.jpg";

function ResourcesLayout() {
  return (
    <div>
      <h1>Learn About Recycle Types</h1>
      <p id="maintext">
        Here, you'll also find a collection of useful links to local businesses
        that specialize in processing recyclable materials. These organizations
        are equipped to handle everything from plastics and metals to electronic
        waste and biodegradable items. Whether you're looking for a nearby
        recycling center or a company that offers pickup services, these
        resources will help you connect with the right businesses in your area
        to ensure that your recyclables are properly processed and reused.
      </p>

      <div class="rows">
        <div class="cols">
          <h2>Paper and Cardboard</h2>
          <img src={paper} alt="" className="recycleimgs" />

          <p>Some text..</p>
        </div>
        <div class="cols">
          <h2>Plastics</h2>
          <img src={plastics} alt="" className="recycleimgs" />

          <p>Some text..</p>
        </div>
        <div class="cols">
          <h2>Glass</h2>
          <img src={glass} alt="" className="recycleimgs" />

          <p>Some text..</p>
        </div>
      </div>
      <div class="rows">
        <div class="cols">
          <h2>Metals</h2>
          <img src={metals} alt="" className="recycleimgs" />

          <p>Some text..</p>
        </div>
        <div class="cols">
          <h2>Electronics (E-waste)</h2>
          <img src={electronics} alt="" className="recycleimgs" />

          <p>Some text..</p>
        </div>
        <div class="cols">
          <h2>Textiles</h2>
          <img src={textitles} alt="" className="recycleimgs" />

          <p>Some text..</p>
        </div>
      </div>
    </div>
  );
}

export default ResourcesLayout;
