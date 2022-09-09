import React from "react";
import { Field, ErrorMessage } from "formik";
import { ListItem, List, Header } from "semantic-ui-react";
// import TextError from "./TextError";

function CompetencyLevel(props) {
  const { id, label, name, options, setFieldValue, ...rest } = props;
  return (
    <div>
      <Header as="h4" color="teal" content={`label: ${label} & id: ${id}`} />
      <Header as="h4" color="teal" content={`name: ${name.toLowerCase()}`} />
      <Field name={name.toLowerCase()}>
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
                  checked={field.value.level === Number(option.value)}
                  onChange={(e) => {
                    const newValue = {
                      ...field.value,
                      level: Number(e.target.value),
                    };
                    setFieldValue(field.name, newValue);
                  }}
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
