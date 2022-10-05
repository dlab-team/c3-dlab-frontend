import React from "react";
import FrameworkLevel from "../profile/FrameworkLevel";
import Select from "../profile/Select";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <FrameworkLevel {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
