import React, { useContext} from 'react';
import { Checkbox, Form } from 'semantic-ui-react';
import UserContext from '../../contexts/userContext';

export const CheckboxForm = ({ 
  label, 
  name, 
  options, 
  value,
  nameID
}) => {
const {userData}= useContext(UserContext)
  const handleChange = (data) => {
    if (data.checked) {
      if (options.indexOf(data.value) !== -1) {
        return;
      } else {
        options.push({ [nameID]: data.value, UserId: userData.id });
        console.log(options);
      }
    } else {
      const ind = options.find((opt) => opt[nameID] === data.value);
      console.log(ind);
      const index = options.indexOf(ind);
      console.log(index);
      options.splice(index, 1);
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