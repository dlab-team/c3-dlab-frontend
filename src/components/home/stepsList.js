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
import SignUpBtn from "../home/signUpBtn";
import { Link } from "react-router-dom";

const renderSteps = (programSteps) => {
  return programSteps.map((step, i) => {
    return (
      <>
        <Step active key={i} style={{ backgroundColor: "#EDF1FD" }}>
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
      <Link to="/signup-form">
        <SignUpBtn />
      </Link>
    </div>
  );
};

export default StepsList;
