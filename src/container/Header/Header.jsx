import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Cauta noua savoare" />
      <h1 className="app__header-h1">Cheia catre o masa rafinata</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
        minus eaque tempora sed quidem aliquam magni, provident, voluptas magnam
        explicabo quae ex vitae fuga ducimus possimus molestiae natus esse est
        alias quod. Doloribus culpa aspernatur beatae eius veniam provident
        dolores laboriosam laborum corporis reiciendis earum velit saepe
        doloremque officiis, quidem ab officia deserunt! Impedit doloremque quia
        id voluptatibus non. Illo harum veniam eum eaque minus. Labore quis
        culpa necessitatibus nesciunt? Nisi aut fugit eos.
      </p>
      <button type="button" className="custom__button">
        Exploreaza Meniul
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
