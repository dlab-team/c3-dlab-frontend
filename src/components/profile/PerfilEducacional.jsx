import React from 'react'
import { Field } from 'formik'
import {  Container, Header, Select, Form } from 'semantic-ui-react'

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

const educationStatusValues = [
  { key: "e", text: "Egresado", value: "egresado" },
  { key: "t", text: "titulado", value: "titulado" },
  { key: "ec", text: "en curso", value: "en curso" },
];

const englishLevelValues = [
  { key: "b", text: "básico", value: "basic" },
  { key: "m", text: "medio", value: "medio" },
  { key: "t", text: "técnico", value: "tecnico" },
  { key: "f", text: "fluido", value: "fluido" },
];

const PerfilEducacional=({
  handleChange,
  handleBlur,
  setFieldValue,
  educationLevelId,
  englishLevelId,
  educationStatus,
  children
})=> {
  return (
    <Container>
      <Header>Perfil Educacional</Header>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label>Máximo nivel educacional</label>
              <Field required
                as={Select}
                options={educacionalOptions}
                id='educationLevelId'
                name={educationLevelId}
                placeholder='Nivel Educacional'
                selection
                value={educationLevelId}
                onChange={(_, data) => setFieldValue('educationLevelId', data.value)}  
                />               
            </Form.Field>
            <Form.Field>
              <label>Nivel Inglés</label>
              <Form.Field
                as={Select}
                options={englishLevelValues}
                id='englishLevel'
                name={englishLevelId}
                placeholder='Nivel inglés'
                selection
                value={englishLevelId}
                onChange={(_, data) => setFieldValue('englishLevelId', data.value)}  
                /> 
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>{children}</Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Situación educacional actual(Bootcamp)</label>
              <Form.Field
                control={Select}
                options={educationStatusValues}
                placeholder='Seleccionar'
                selection
                value={educationStatus}
                onChange={(_, data) => setFieldValue('educationStatus', data.value)}  
                /> 
            </Form.Field>
          </Form.Group >
    </Container>
  )
}
export default PerfilEducacional;
