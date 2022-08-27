import React, { Fragment } from 'react'
import { Field, ErrorMessage, Form,  } from 'formik'


export default function CheckboxGroup(props) {
    const {label, name, options, ...rest } = props 
  return (
    <Form>
        <Field name={name} {...rest}>
            {({field})=> {
            return options.map(option => {
                return (
                    <Fragment key={option.key}>
                        <Form.Checkbox
                        id={option.value}{...field}
                        label={label}
                        name={name}
                        value={option.value}
                        checked={field.value.includes(option.value)}
                       // onChange={(_, data)=> formik.setFieldValue('job_0', data.value)}
                        />   
                        <label htmlFor={option.valuee}>{option.key}</label>
                    </Fragment>
                )
            })
            }}
            </Field>
    
    </Form>
  )
}
