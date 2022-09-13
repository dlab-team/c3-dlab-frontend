import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

export const CheckboxForm = ({ label, name, options, value }) => {
  return (
    <Form.Field
      control={Checkbox}
      label={label}
      name={name}
      value={value}
      onChange={(_, data) => options.push( data.value)}
    />
  );
};           