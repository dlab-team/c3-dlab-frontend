import React from "react";
import CompetencyLevel from "./CompetencyLevel";
import Select from "../profile/Select";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <CompetencyLevel {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
