import { useField } from 'formik';
import React from 'react';

const RadioLevels = ({
  label,
  nameData,
  setFieldValue,
  nameValueForm,
  nameDB,
  ...props
}) => {
  // this will return field props for an <input />
  const [field, meta, helpers] = useField(props.name); 
  const handleChange = () => {
    let data = {
      [nameDB]: props.id,
      level: parseInt(props.value),
      UserId: 1,
    };
    console.log(data);
    if (nameData.length <= 0) {
      return nameData.push(data);
    }
    const array = nameData.filter(
      (item) => item[nameDB] !== data[nameDB]
      );
    nameData = [...array, data];
    // // console.log(nameLanguage);
    setFieldValue(nameValueForm, nameData);
  };
  return (
    <>
      <label>
        <input {...field} {...props} onChange={handleChange} />
        {meta.error && meta.touched && <div>{meta.error}</div>}
        {label}
      </label>
    </>
  );
};
export default RadioLevels;