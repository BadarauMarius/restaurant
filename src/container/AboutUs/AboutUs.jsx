import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section __padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.R} alt="r letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Despre Noi</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          enim.
        </p>
        <button type="button" className="custom__button">
          Mai mult
        </button>
      </div>

      <div className="app__aboutus-content_knife flexx__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Istoricul nostru</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          enim.
        </p>
        <button type="button" className="custom__button">
          Mai mult
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
