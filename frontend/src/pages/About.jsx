import React from "react";
import ".//PagesStyles/About.css";
import natureAbout from "../assets/natureAbout.jpg";
import trash1 from "../assets/trash1.jpg";
import trash2 from "../assets/trash2.jpg";
import trash3 from "../assets/trash3.jpg";
import pollution1 from "../assets/pollution1.jpg";
import recycleinfo from "./WebsiteText/recycleinfo.json";

const About = () => {
  return (
    <div>
      <div class="row">
        <div class="column side">
          <img src={trash1} alt="" className="sideimg" />
          <p className="sidetext">{recycleinfo.plasticPollution}</p>
          <img src={trash3} alt="" className="sideimg" />
          <p className="sidetext">{recycleinfo.pollutionClimateChange}</p>
        </div>

        <div class="column middle">
          <h1 class="mainheading">What is our Goal?</h1>

          <p className="middleText">{recycleinfo.aboutmiddletext}</p>

          <img src={natureAbout} alt="" className="natureAboutImg" />
        </div>

        <div class="column side">
          <img src={pollution1} alt="" className="sideimg" />
          <p className="sidetext">{recycleinfo.waterPollution}</p>

          <img src={trash2} alt="" className="sideimg" />
          <p className="sidetext">{recycleinfo.airPollution}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
