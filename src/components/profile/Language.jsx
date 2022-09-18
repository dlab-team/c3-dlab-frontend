import React from 'react'
import { Container, Form } from 'semantic-ui-react'
import Niveles from './Niveles'

export default function Language({language}) {

  return (
    <Container> 
      <Form>
        {language.map((item)=>(
        <Form.Group key={item.id} widths='equal'>
            <Form.Field label={{ children: item.name }}>
          </Form.Field>
          <Form.Field>
            <Niveles
            name= {item.name}/>            
          </Form.Field>
        </Form.Group>   
          ))}
          
      </Form>
    </Container>  )
}
