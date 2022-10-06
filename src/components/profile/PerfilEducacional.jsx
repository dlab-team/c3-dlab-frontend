import React from 'react'
import { Field } from 'formik'
import {  Container, Header, Select, Form } from 'semantic-ui-react'

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
  educacionalOptions=[],
  educationLevelId,
  englishLevelId,
  educationStatus,
  children
})=> {
    const edOptions = educacionalOptions.map((ed) => {
      return { key: ed.id, text: ed.name, value: ed.id };
    });
  return (
    <Container>
      <Header>Perfil Educacional</Header>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label>Máximo nivel educacional</label>
              <Field required
                as={Select}
                options={edOptions}
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
