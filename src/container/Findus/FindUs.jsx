import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Unde ne poti gasi
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Barlad / Str.Mihai Viteazu nr. 11</p>
        <p className="p__cormorant" style={{color: "#dcca87", margin: "2rem 0" }}>Program</p>
        <p className="p__opensans">Luni - Vineri: 9:00 - 23:00</p>
        <p className="p__opensans">Sambata - Duminica: 9:00 - 24:00</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Te asteptam</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
