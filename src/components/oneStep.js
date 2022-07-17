import React from "react";

const OneStep = (step) => {
  const { stepNumber, title, subtitle } = step;

  return <div>{stepNumber}</div>;
};

export default OneStep;
