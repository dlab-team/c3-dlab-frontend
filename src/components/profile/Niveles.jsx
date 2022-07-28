import React from 'react'
import { Checkbox, Form, Header } from 'semantic-ui-react'

export default function Niveles() {
  return (
    <Form>
      <Form.Group inline>
       <Form.Field control={Checkbox} label='1'/>
       <Form.Field control={Checkbox} label='2'/>
       <Form.Field control={Checkbox} label='3'/>
      </Form.Group>
    </Form>

    
  )
}
