import React from 'react'
import { Formik, Field } from 'formik'
import {  Container, Header, Select, Form, Input, Button } from 'semantic-ui-react'
import AddStudy from './AddStudy';

const educacionalOptions = [
  { 
    key: "1", 
    text: "Universidad completa", 
    value: "Universidad completa" },
  {
    key: "2",
    text: "Universidad incompleta o cursando",
    value: "Universidad incompleta o cursando",
  },
  {
    key: "3",
    text: "Instituto profesional o CFT completa",
    value: "Instituto profesional o CFT completa",
  },
  {
    key: "4",
    text: "Instituto profesional o CFT en curso",
    value: "Instituto profesional o CFT en curso",
  },
  {
    key: "5",
    text: "Educación media completa",
    value: "Educación media completa",
  },
  {
    key: "6",
    text: "Educación media incompleta",
    value: "Educación media incompleta",
  },
  { key: "7", text: "Escolar completa", value: "Escolar completa" },
  { key: "8", text: "Postgrado completo", value: "Postgrado completo" },
  { key: "9", text: "Postgrado incompleto", value: "Postgrado incompleto" },
];

const actualOptions = [
  { key: "e", text: "Egresado", value: "egresado" },
  { key: "t", text: "titulado", value: "titulado" },
  { key: "ec", text: "en curso", value: "en curso" },
];

const englishOptions = [
  { key: "b", text: "básico", value: "basic" },
  { key: "m", text: "medio", value: "medio" },
  { key: "t", text: "técnico", value: "tecnico" },
  { key: "f", text: "fluido", value: "fluido" },
];

export default function PerfilEducacional() {
  return (
    <Container>
      <Formik
        initialValues={{
          educationLevelId:'',
          englishLevel:'',
          studies:[{
            name:'',
            institution:'',
            institutionType:''
          }],
          actual:'',
          more:''
        }}
        onSubmit={(data, {setSubmitting}) => {
          setSubmitting(true);
          console.log("submit:", data);
          setSubmitting(false);
        }}>
        {({values, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue}) => (        
        <Form onSubmit={handleSubmit}>
          <Header as='h2'>Perfil Educacional</Header>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label>Máximo nivel educacional</label>
              <Field required
                as={Select}
                options={educacionalOptions}
                id='educationLevelId'
                name='educationLevelId'
                placeholder='Nivel Educacional'
                selection
                value={values.educationLevelId}
                onChange={(_, data) => setFieldValue('educationLevelId', data.value)}  
                />               
            </Form.Field>
            <Form.Field>
              <label>Nivel Inglés</label>
              <Form.Field
                as={Select}
                options={englishOptions}
                id='englishLevel'
                placeholder='Nivel inglés'
                selection
                value={values.englishLevel}
                onChange={(_, data) => setFieldValue('englishLevel', data.value)}  
                /> 
            </Form.Field>
          </Form.Group>
          <p>A continuación, carreras profesionales, cursos, bootcamp o certificaciones cursadas relacionadas al desarrollo de software, diseño o TI (puedes indicarnos las más importantes o actuales):</p>
          <Form.Group widths='equal'>
            <Form.Field required>
                <Form.Input
                  label='Nombre de la carrera, curso o bootcamp'
                  id='studies'
                  name='studies[]'
                  value={values.studies['name']}
                  onChange={(_, data)=> values.studies['name']=data.value}
                  />
                <Form.Input
                  label='Nombre Institución'
                  id='institution'
                  name='institution'
                  value={values.studies['institution']}
                  onChange={(_, data)=> values.studies['institution']= data.value}
                />
                <Form.Input
                  label='Tipo Institución'
                  id='institutionType'
                  name='institutionType'
                  value={values.institutionType}
                  onChange={(_, data)=> values.studies['institutionType']= data.value}
                />
            </Form.Field>
            <AddStudy name= {values.studies['name']}></AddStudy>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Situación educacional actual(Bootcamp)</label>
              <Form.Field
                control={Select}
                options={actualOptions}
                placeholder='Seleccionar'
                selection
                value={values.actual}
                onChange={(_, data) => setFieldValue('actual', data.value)}  
                /> 
            </Form.Field>
          </Form.Group >
          <Form.Input 
            type='text' 
            label='alguna otra competencia que quieras mencionar?'
            name='more'
            value={values.more}
            onChange={handleChange} />
        <Form.Button disabled={isSubmitting} type='submit' content='Enviar' primary/>
        </Form>
        )}
      </Formik>
    </Container>
  )
}
