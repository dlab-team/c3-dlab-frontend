import React from 'react'
import { Formik } from 'formik'
import { Button, Form } from 'semantic-ui-react'

export default function AddStudy(props) {
    return (
        <Formik
            initialValues={{
                studies: [{
                    name: '',
                    institution: '',
                    institutionType: ''
                }]
            }}
            onSubmit={(data, {setSubmitting}) => {
                setSubmitting(true);
                console.log("submit:", data);
                setSubmitting(false);
              }}>
            {({ values, isSubmitting, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Field required>
                    <Form.Input
                        label='Nombre de la carrera, curso o bootcamp'
                        id='studies'
                        name='studies[]'
                        value={values.studies['name']}
                        onChange={(_, data) => values.studies['name'] = data.value}
                    />
                    <Form.Input
                        label='Nombre Institución'
                        id='institution'
                        name='institution'
                        value={values.studies['institution']}
                        onChange={(_, data) => values.studies['institution'] = data.value}
                    />
                    <Form.Input
                        label='Tipo Institución'
                        id='institutionType'
                        name='institutionType'
                        value={values.institutionType}
                        onChange={(_, data) => values.studies['institutionType'] = data.value}
                    />
                </Form.Field>
            </Form>       
            )}
        </Formik>

    )
}
