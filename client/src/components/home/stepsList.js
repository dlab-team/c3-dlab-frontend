import React from "react";
import {
  Header,
  Step,
  StepGroup,
  StepContent,
  StepTitle,
  StepDescription,
} from "semantic-ui-react";
import "../../assets/styles.css";
import { programSteps } from "../../pages/home/data";
import SignUp from "./signUp";

const renderSteps = (programSteps) => {
  return programSteps.map((step, index) => {
    return (
      <>
        <Step active index={index} style={{ backgroundColor: "#EDF1FD" }}>
          <StepContent>
            <StepTitle content={step.title} />
            <StepDescription content={step.subtitle} />
          </StepContent>
        </Step>
      </>
    );
  });
};

const StepsList = () => {
  return (
    <div>
      <Header
        as="h1"
        content="Encuentra trabajo en 3 simples pasos"
        className="section-title"
      />
      <StepGroup ordered stackable="mobile" size="huge">
        {renderSteps(programSteps)}
      </StepGroup>
      <SignUp />
    </div>
  );
};

export default StepsList;
