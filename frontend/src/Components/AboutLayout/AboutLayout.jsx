import React from "react";
import "./AboutLayout.css";
import natureAbout from "../../assets/natureAbout.jpg";
import trash1 from "../../assets/trash1.jpg";
import trash2 from "../../assets/trash2.jpg";
import trash3 from "../../assets/trash3.jpg";
import pollution1 from "../../assets/pollution1.jpg";

function AboutLayout() {
  return (
    <div>
      <div class="row">
        <div class="column side">
          <img src={trash1} alt="" className="sideimg" />
          <p>
            Plastic Pollution is Widespread: Over 8 million tons of plastic end
            up in the oceans each year, harming marine life and ecosystems.
            Plastic takes hundreds of years to decompose, leading to long-term
            environmental impacts.
          </p>
          <img src={trash3} alt="" className="sideimg" />
          <p>
            Pollution Contributes to Climate Change: Greenhouse gases such as
            carbon dioxide and methane, released through industrial activities,
            deforestation, and agriculture, trap heat in the atmosphere. This
            drives global warming, leading to more frequent extreme weather
            events like hurricanes, droughts, and heatwaves.
          </p>
        </div>

        <div class="column middle">
          <h1 class="mainheading">What is our Goal?</h1>

          <p>
            Welcome to EcoCulture, a community-driven platform dedicated to
            empowering people to make a positive environmental impact through
            education and action. Our mission is simple: to promote the
            importance of recycling, reduce waste, and combat overconsumption in
            America. At EcoCulture, we believe that small, thoughtful steps can
            lead to significant change. Our goal is to provide valuable
            resources and practical tips that help individuals and families
            reduce their environmental footprint. From understanding the basics
            of recycling to learning how to repurpose everyday items, we aim to
            create a space where sustainability is accessible to all. But
            education is only the beginning. We also invite our community to
            take action by donating unused or gently used items instead of
            discarding them. This not only helps curb overconsumption but also
            contributes to saving money for families in need within the
            community. Every donation makes a difference, allowing us to
            redistribute resources, reduce waste, and promote a more sustainable
            lifestyle for everyone. Join us at EcoCulture as we work together to
            build a greener, more sustainable future—one step, one item, one
            community at a time.
          </p>

          <img src={natureAbout} alt="" className="natureAboutImg" />
        </div>

        <div class="column side">
          <img src={pollution1} alt="" className="sideimg" />
          <p>
            Water Pollution Harms Ecosystems: Industrial waste, agricultural
            runoff, and sewage discharge contribute to water pollution. This
            contamination affects drinking water sources and harms aquatic
            ecosystems, causing fish kills, loss of biodiversity, and ecosystem
            damage.
          </p>

          <img src={trash2} alt="" className="sideimg" />
          <p>
            Air Pollution Causes Health Problems: Air pollution, primarily from
            vehicle emissions, industrial activities, and burning fossil fuels,
            can cause respiratory and cardiovascular diseases, as well as
            premature deaths. The World Health Organization estimates that air
            pollution contributes to millions of deaths worldwide each year.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutLayout;
