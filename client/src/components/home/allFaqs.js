import React from "react";
import { Accordion, Container } from "semantic-ui-react";
import { aboutDesafioFaqs } from "../../pages/home/data";

const AllFaqs = () => {
  return (
    <Container>
      <Accordion
        // inverted
        className="all-faqs-accordion"
        fluid
        styled
        // defaultActiveIndex={0}
        panels={aboutDesafioFaqs}
        color="#fff"
      />
    </Container>
  );
};

export default AllFaqs;
