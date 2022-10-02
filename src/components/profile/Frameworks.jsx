import React, { useCallback } from 'react'
import { Field } from 'formik'
import { Form, Container } from 'semantic-ui-react'
import RadioLevels from './RadioLevels';

const Frameworks=({
  dataFrameworks = [],
  nameFramework = [],
  setFieldValue,
})=> {
  return (
    <>
      {dataFrameworks.map((item) => (
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
            nameData={nameFramework}
            setFieldValue={setFieldValue}
            nameValueForm="frameworks"
            />
            <RadioLevels
            label="2"
            type="radio"
            name={`${item.name}`}
            value="2"
            id={item.id}
            nameData={nameFramework}
            setFieldValue={setFieldValue}
            nameValueForm="frameworks"
            />
            <RadioLevels
            label="3"
            type="radio"
            name={`${item.name}`}
            value="3"
            id={item.id}
            nameData={nameFramework}
            setFieldValue={setFieldValue}
            nameValueForm="frameworks"
            />
            </Form.Group>
          ))}
    </>
  )
      }
  export default Frameworks