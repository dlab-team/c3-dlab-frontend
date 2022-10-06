import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

export const CheckboxForm = ({ label, name, options, value }) => {
  const handleChange= (data)=>{
    if (data.checked){
      if(options.indexOf(data.value)!== -1){
        return;
      }else{
        options.push(data.value);
      }
    } else {
      const index= options.indexOf(data.value);
      options.splice(index , 1);
    }
  };
  return (
    <Form.Field
      control={Checkbox}
      label={label}
      name={name} 
      value={value}
      onChange={(_, data) => handleChange( data)}
    />
  );
};           