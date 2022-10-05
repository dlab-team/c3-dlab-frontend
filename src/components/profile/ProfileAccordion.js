import React from "react";
import { Accordion, Header, HeaderSubheader } from "semantic-ui-react";
import { profileAccordionPanels } from "../profile/data";

const ProfileAccordion = () => {
  return (
    <div>
      <HeaderSubheader
        as="h4"
        style={{ display: "inline" }}
        content="This is an accordion"
      />
      <Accordion
        inverted
        fluid
        styled
        // defaultActiveIndex={0}
        panels={profileAccordionPanels}
        color="#fff"
      />
    </div>
  );
};

export default ProfileAccordion;
