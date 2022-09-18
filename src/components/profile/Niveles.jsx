import React from 'react'
import { useState } from 'react'
import { Radio, Form } from 'semantic-ui-react'

export default function Niveles({name}) {
  const [state, setState] = useState('')
  const handleChange=(e,  { value } )=>{
    setState(value)
  }
  return (
    <Form>
      <Form.Group inline>
      <Form.Field>
          <Radio
            label='1'
            name={name}
            value='1'
            checked={state === '1'}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='2'
            name={name}
            value='2'
            checked={state === '2'}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='3'
            name={name}
            value='3'
            checked={state === '3'}
            onChange={handleChange}
          />
        </Form.Field>
      </Form.Group>
    </Form>

    
  )
}
