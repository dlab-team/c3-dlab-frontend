import React from "react";
import { Accordion } from "semantic-ui-react";
import { faqs } from "../../pages/home/data";

const Faqs = () => {
  return (
    <>
      <Accordion
        inverted
        style={{ backgroundColor: "#312C60", fontSize: "24px", color: "white" }}
        fluid
        styled
        defaultActiveIndex={0}
        panels={faqs}
      />
    </>
  );
};

export default Faqs;
