import React, { useCallback } from 'react'
import { Field } from 'formik'
import { Container, Form } from 'semantic-ui-react'
import RadioLevels from './RadioLevels';

const Herramientas = ({
  dataTools = [],
  nameTool = [],
  setFieldValue
}) =>{
  return (
    <>
      {dataTools.map((item)=>(
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
         nameData={nameTool}
         setFieldValue={setFieldValue}
         nameValueForm="tools"
         nameDB="ToolId"
          />
          <RadioLevels
          label= "2"
          type="radio"
          name={`${item.name}`}
          value="2"
          id={item.id}
          nameData={nameTool}
          setFieldValue={setFieldValue}
          nameValueForm="tools"
          nameDB="ToolId"
          />
          <RadioLevels
          label= "3"
          type="radio"
          name={`${item.name}`}
          value="3"
          id={item.id}
          nameData={nameTool}
          setFieldValue={setFieldValue}
          nameValueForm="tools"
          nameDB="ToolId"
          />
        </Form.Group>
      ))}
    </>
  )
}

export default Herramientas