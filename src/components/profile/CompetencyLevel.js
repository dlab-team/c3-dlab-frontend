import React from "react";
import { Field, ErrorMessage } from "formik";
import { ListItem, List, Header } from "semantic-ui-react";
// import TextError from "./TextError";

function CompetencyLevel(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <Header as="h4" color="teal" content={label} />
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  style={{ margin: "5px" }}
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value} style={{ margin: "5px" }}>
                  {option.key}
                </label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </div>
  );
}

export default CompetencyLevel;
