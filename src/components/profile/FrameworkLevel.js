import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  Container,
  Form,
  ListItem,
  List,
  Header,
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "semantic-ui-react";
// import TextError from "./TextError";

function FrameworkLevel(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <Header as="h4" color="teal" content={label} />
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <List horizontal key={option.key}>
                <ListItem style={{ margin: "15px" }}>
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
                </ListItem>
              </List>
            );
          });
        }}
      </Field>
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </div>
  );
}

export default FrameworkLevel;
