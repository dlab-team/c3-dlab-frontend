import React from 'react'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { Input, Button } from 'semantic-ui-react';

export default function AddStudies() {
    const initialValues = {
      studies: [
        {
          name: '',
          institution: '',
          typeInstitution: ''
        },
      ],
    };
  return (
    <div>
      <p>A continuación, carreras profesionales, cursos, bootcamp o certificaciones cursadas relacionadas al desarrollo de software, diseño o TI (puedes indicarnos las más importantes o actuales):</p>
        <Formik
          initialValues={initialValues}
          //onSubmit={async (values) => {
            //await new Promise((r) => setTimeout(r, 500));
            //alert(JSON.stringify(values, null, 2));
            //console.log('hhh', values)
          //}}
          onSubmit={(data, {setSubmitting}) => {
            setSubmitting(true);
            console.log("submit:", data);
            setSubmitting(false);
          }}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="studies">
                {({ insert, remove, push, isSubmitting }) => (
                  <div>
                    {values.studies.length > 0 &&
                      values.studies.map((studie, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`studies.${index}.name`}>Curso o  Bootcamp</label>
                            <Input
                              name={`studies.${index}.name`}
                              placeholder="Nombre intitución"
                              type="text"
                            />
                            <ErrorMessage
                              name={`studies.${index}.name`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`studies.${index}.institution`}>Institución</label>
                            <Field
                              name={`studies.${index}.institution`}
                              placeholder="institución"
                              type="text"
                            />
                            <ErrorMessage
                              name={`studies.${index}.institution`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`studies.${index}.typeInstitution`}>Tipo Institución</label>
                            <Field
                              name={`studies.${index}.typeInstitution`}
                              placeholder="tipo institución"
                              type="text"
                            />
                            <ErrorMessage
                              name={`studies.${index}.typeInstitution`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="row">
                            <Button
                              type="button"
                              primary
                              onClick={() => remove(index)}
                            >
                              Eliminar
                            </Button>
                            <Button
                              type="button"
                              primary
                              onClick={() => push({ name: '', institution: '', typeInstitution:'' })}
                            >
                            Agregar
                            </Button>
                          </div>
                        </div>
                      ))}

                    <Button disabled={isSubmitting} primary type='submit'>Enviar</Button>
                  </div>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </div>
  )
}
