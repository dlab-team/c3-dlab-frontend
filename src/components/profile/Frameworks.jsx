import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import Niveles from './Niveles'

export default function Frameworks({framework}) {

  return (
    <Container>
      <Form>
        {framework.map((item)=>(
         <Form.Group key={item.id} widths='equal'>  
            <Form.Field label={{ children: item.name }}>
            </Form.Field>
              <Form.Field>
              <Niveles
               name={item.name}/>            
            </Form.Field>
          </Form.Group>           
        ))}

      </Form>
    </Container>
  )
}
