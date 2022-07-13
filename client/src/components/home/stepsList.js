import React from "react";
import {
  Grid,
  GridColumn,
  Header,
  HeaderSubheader,
  Icon,
} from "semantic-ui-react";
import "../../assets/styles.css";
import { programSteps } from "../../pages/home/data";

const renderSteps = (programSteps) => {
  return programSteps.map((step, index) => {
    return (
      <>
        <GridColumn index={index}>
          <Header as="h1" icon textAlign="center">
            <Icon name={step.icon} circular inverted color={step.color} />
            <Header.Content>{step.title}</Header.Content>
          </Header>
          <HeaderSubheader as="h5" content={step.subtitle} />
        </GridColumn>
      </>
    );
  });
};

const StepsList = () => {
  return (
    <Grid stackable container columns={3}>
      {renderSteps(programSteps)}
    </Grid>
  );
};

export default StepsList;
