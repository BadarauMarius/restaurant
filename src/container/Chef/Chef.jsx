import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Cuvantul bucatarului" />
      <h1 className="headtext__cormorant">In ce credem!</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            voluptates.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
          reprehenderit odio! Est dolores ullam numquam voluptatibus dicta quo
          corporis sunt velit, dolore ipsum possimus placeat labore mollitia
          consequatur inventore. Modi?
        </p>
      </div>

      <p className="p__opensans">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        reprehenderit odio! Est dolores ullam numquam voluptatibus dicta quo
        corporis sunt velit, dolore ipsum possimus placeat labore mollitia
        consequatur inventore. Modi?
      </p>

      <div className="app__chef-sign">
        <p>Numele bucatarului</p>
        <p className="p__opensans">Bucatar & fondator</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
