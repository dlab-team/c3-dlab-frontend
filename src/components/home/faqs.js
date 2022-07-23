import React from "react";
import { Accordion, Header, HeaderSubheader } from "semantic-ui-react";
import { aboutDesafioFaqs } from "../../pages/home/data";

const emailTo = "contacto@devsafio.com";
const openInNewTab = () => {
  window.open(`mailto:${emailTo}`, "_blank", "noreferrer noopener");
};

const Faqs = () => {
  return (
    <div className="faq-wrapper">
      <Header
        as="h1"
        content="Preguntas Frecuentes"
        className="section-title"
      />
      <HeaderSubheader
        as="h4"
        style={{ display: "inline" }}
        content="Si tienes alguna pregunta o si quieres saludarnos, escríbenos a"
      />
      <button className="mailto-button-faq" onClick={openInNewTab}>
        contacto@devsafio.com
      </button>
      <Accordion
        inverted
        className="faq-accordion"
        fluid
        styled
        // defaultActiveIndex={0}
        panels={aboutDesafioFaqs}
        color="#fff"
      />
    </div>
  );
};

export default Faqs;
