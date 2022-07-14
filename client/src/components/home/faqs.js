import React from "react";
import { Accordion } from "semantic-ui-react";
import { aboutDesafioFaqs } from "../../pages/home/data";

const Faqs = () => {
  return (
    <Accordion
      inverted
      className="faq-accordion"
      fluid
      styled
      defaultActiveIndex={0}
      panels={aboutDesafioFaqs}
      color="#fff"
    />
  );
};

export default Faqs;
