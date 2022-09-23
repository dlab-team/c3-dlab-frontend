import React, { useCallback } from 'react'
import { Field } from 'formik'
import { Form, Container } from 'semantic-ui-react'


export default function Frameworks({framework=[], nameFramework=[], setFieldValue}) {
  const handleClick = useCallback(
    (e) => {
      let data = { name: e.target.name, value: e.target.value };

      if (nameFramework.length <= 0) {
        console.log("si");
        return nameFramework.push(data);
      }

      let array = nameFramework.filter((item) => item.name !== data.name);

      nameFramework = [...array, data];
      // console.log(nameLanguage);
      setFieldValue('frameworks', [...nameFramework]);
    },
    [nameFramework]
  );
  return (
    <Container>
{framework.map((item) => (
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
