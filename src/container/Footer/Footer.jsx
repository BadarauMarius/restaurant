import React from "react";


import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contacteaza-ne</h1>
        <p className="p__opensans">Barlad / Str. Mihai Viteaza nr.11</p>
        <p className="p__opensans">0777777777</p>
        <p className="p__opensans">0235222222</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.restaurantname} alt="footer.logo" />
        <p className="p__opensans">
          Cel mai bun mod de a te regăsi este să te pierzi în slujba altora
        </p>
        
      </div>
      <div className="app__footer-link_work">
        <h1 className="app__footer-headtext">Program</h1>
        <p className="p__opensans">Luni - Vineri</p>
        <p className="p__opensans">9:00 - 23:00</p>
        <p className="p__opensans">Sambata - Duminica</p>
        <p className="p__opensans">9:00 - 24:00</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2023 Badarau Marius. toate drepturile rezervate
      </p>
    </div>
  </div>
);

export default Footer;
