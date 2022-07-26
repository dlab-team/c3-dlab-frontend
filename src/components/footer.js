import React from "react";
import imageleft from "../assets/img/Logos-devsafio/DEV LOGOTIPO WHITE.png";
import imageright from "../assets/img/DEV ISOTIPO WHITE.png";
import "../assets/styles.css";

const Footer = () => {
  return (
    <footer>
      <section>
        <img className="imageright" src={imageright} />
      </section>
      <section>
        <img className="imageleft" src={imageleft} />
      </section>
    </footer>
  );
};

export default Footer;
