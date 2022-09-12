import React from 'react'
import { Field, FieldArray } from 'formik';
import { Button, Container, Header, Icon } from 'semantic-ui-react';


export const AddStudies = ({
  values,
  name,
  buttonLabel,
  placeholders,
  handleChange,
  handleBlur,
}) => {
  return (
    <Container>
      <Header>Agregar Estudios</Header>
      <FieldArray
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        render={(arrayHelpers) => (
          <div>
            {values && values.length > 0 ? (
              values.map((value, index) => (
                <div key={index}>
                  {placeholders.map((item) => (
                    <span key={item.id}>
                      <label htmlFor={item.name}>{item.placeholder}</label>
                      <Field
                        id={item.name}
                        name={`${name}.${index}.${item.name}`}
                        placeholder={item.placeholder}
                      />
                    </span>
                  ))}
                  {/* <Field name={`courses.${index}`} />
                <Field name={`courses.${index}`} /> */}
                  <Button
                    basic
                    type="button"
                    color='red'
                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                  >
                    <Icon name='trash alternate'/>
                  </Button>
                  <Button
                    type="button"
                    basic
                    color='blue'
                    onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                  >
                    <Icon name='add'/>
                  </Button>
                </div>
              ))
            ) : (
              <Button type="button" onClick={() => arrayHelpers.push('')}>
                {/* show this when user has removed all courses from the list */}
                {buttonLabel}
              </Button>
            )}
          </div>
        )}
      />
    </Container>
  );
};
export default AddStudies;