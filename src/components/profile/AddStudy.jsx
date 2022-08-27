import React from 'react'
import { Form } from 'semantic-ui-react'

export default function AddStudy(props) {
    return (
        <Form.Field>
            <Form.Input label='Nombre de la carrera, curso o bootcamp'/>
            <Form.Input label='Nombre Institución' />
            <Form.Input label='Tipo Institución' />
        </Form.Field>
    )
}
