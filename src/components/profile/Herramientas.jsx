import React, { useCallback } from 'react'
import { Field } from 'formik'
import { Container, Form } from 'semantic-ui-react'


export default function Herramientas({tools=[], nameTools=[], setFieldValue}) {
  const handleClick = useCallback(
    (e) => {
      let data = { name: e.target.name, value: e.target.value };

      if (nameTools.length <= 0) {
        console.log("si");
        return nameTools.push(data);
      }

      let array = nameTools.filter((item) => item.name !== data.name);

      nameTools = [...array, data];
      // console.log(nameLanguage);
      setFieldValue('tools', [...nameTools]);
    },
    [nameTools]
  );
  return (
    <Container>
{tools.map((item) => (
        <Form.Group inline key={item.id}>
          <span style={{ display: 'inline-block', marginRight: '2rem' }}>
            {item.name}:
          </span>
          <label>
            <Field
              type="radio"
              name={`${item.name}`}
              value="1"
              onClick={handleClick}
            ></Field>
            1
          </label>

          <label>
            <Field
              type="radio"
              name={`${item.name}`}
              value="2"
              onClick={handleClick}
            ></Field>
            2
          </label>

          <label>
            <Field
              type="radio"
              name={`${item.name}`}
              value="3"
              onClick={handleClick}
            ></Field>
            3
          </label>
        </Form.Group>
      ))}
    </Container>
    
  )
}
