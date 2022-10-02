import React, { useCallback } from 'react'
import { Field } from 'formik'
import { Container, Form, Radio } from 'semantic-ui-react'
import RadioLevels from './RadioLevels';

const Languages = ({
  dataLanguages = [],
  nameLanguage = [],
  setFieldValue,//
}) => {
  return (
    <>
      {dataLanguages.map((item) => (
        <Form.Group inline key={item.id}>
          <span style={{ display: 'inline-block', marginRight: '2rem' }}>
            {item.name}:
          </span>

          <RadioLevels
            label="1"
            type="radio"
            name={`${item.name}`}
            value="1"
            id={item.id}
            nameData={nameLanguage}
            setFieldValue={setFieldValue}
            nameValueForm="languages"
            nameDB="LanguageId"
          ></RadioLevels>

          <RadioLevels
            label="2"
            type="radio"
            name={`${item.name}`}
            value="2"
            id={item.id}
            nameData={nameLanguage}
            setFieldValue={setFieldValue}
            nameValueForm="languages"
            nameDB="LanguageId"

          ></RadioLevels>

          <RadioLevels
            label="3"
            type="radio"
            name={`${item.name}`}
            value="3"
            id={item.id}
            nameData={nameLanguage}
            setFieldValue={setFieldValue}
            nameValueForm="languages"
            nameDB="LanguageId"

          ></RadioLevels>
        </Form.Group>
      ))}
    </>
  );
};
export default Languages