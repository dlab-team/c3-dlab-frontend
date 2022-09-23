import React, { useCallback } from 'react'
import { Field } from 'formik'
import { Container, Form, Radio } from 'semantic-ui-react'


export default function Language({language=[], nameLanguage=[], setFieldValue}) {
  
  
  const handleClick = useCallback(
    (e) => {
      let data = { name: e.target.name, value: e.target.value };

      if (nameLanguage.length <= 0) {
        console.log("si");
        return nameLanguage.push(data);
      }

      let array = nameLanguage.filter((item) => item.name !== data.name);

      nameLanguage = [...array, data];
      // console.log(nameLanguage);
      setFieldValue('languages', [...nameLanguage]);
    },
    [nameLanguage]
  );

  return (
    <Container> 
           {language.map((item) => (
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
          
    </Container>  )
}
