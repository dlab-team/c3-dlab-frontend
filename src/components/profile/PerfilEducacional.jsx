import React from 'react'
import { Form, Header, Select, } from 'semantic-ui-react'
import { useFormik } from 'formik';


const EducacionalOptions = [
  { key: "u", text: "Universidad completa", value: "Universidad completa" },
  {
    key: "ui",
    text: "Universidad incompleta o cursando",
    value: "Universidad incompleta o cursando",
  },
  {
    key: "ip",
    text: "Instituto profesional o CFT completa",
    value: "Instituto profesional o CFT completa",
  },
  {
    key: "ic",
    text: "Instituto profesional o CFT en curso",
    value: "Instituto profesional o CFT en curso",
  },
  {
    key: "em",
    text: "Educación media completa",
    value: "Educaión media completa",
  },
  {
    key: "ei",
    text: "Educación media incompleta",
    value: "Educación media incompleta",
  },
  { key: "ec", text: "Escolar completa", value: "Escolar completa" },
  { key: "pc", text: "Postgrado completo", value: "Postgrado completo" },
  { key: "pi", text: "Postgrado incompleto", value: "Postgrado incompleto" },
];

const ActualOptions = [
  { key: "e", text: "Egresado", value: "egresado" },
  { key: "t", text: "titulado", value: "titulado" },
  { key: "ec", text: "en curso", value: "en curso" },
];
const EnglishOptions = [
  { key: "b", text: "básico", value: "basic" },
  { key: "m", text: "medio", value: "medio" },
  { key: "t", text: "técnico", value: "tecnico" },
  { key: "f", text: "fluido", value: "fluido" },
];
export default function PerfilEducacional() {
  const formik= useFormik({
    initialValues:{
      education:'',
      english:'',
      career_0:'',
      institution_0:'',
      typeInstitution_0:'',
      career_1:'',
      institution_1:'',
      typeInstitution_1:'',
      career_2:'',
      institution_2:'',
      typeInstitution_2:'',
      career_3:'',
      institution_3:'',
      typeInstitution_3:'',
      actual:'',
      more:''
    },
    onSubmit:(values)=>{
      console.log(JSON.stringify(values))
    }
  })
  return (
    <div>
        <Form onSubmit={formik.handleSubmit}>
          <Header as='h2'>Perfil Educacional</Header>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Máximo nivel educacional</label>
              <Form.Field
                 control={Select}
                 options={EducacionalOptions}
                  placeholder='Seleccionar'
                  selection
                  value={formik.values.education}
                  onChange={(_, data) => formik.setFieldValue('education', data.value)}  
                />               
            </Form.Field>
            <Form.Field>
              <label>Nivel Inglés</label>
              <Form.Field
                control={Select}
                options={EnglishOptions}
                placeholder='Seleccionar'
                selection
                value={formik.values.english}
                onChange={(_, data) => formik.setFieldValue('english', data.value)}  
                /> 
            </Form.Field>
          </Form.Group>
          <p>A continuación, carreras profesionales, cursos, bootcamp o certificaciones cursadas relacionadas al desarrollo de software, diseño o TI (puedes indicarnos las más importantes o actuales):</p>
          <Form.Group widths='equal'>
            <Form.Field required>
                <Form.Input
                  label='Nombre de la carrera, curso o bootcamp'
                  id='career_0'
                  name='career_0'
                  value={formik.values.career_0}
                  onChange={formik.handleChange}
                />
                <Form.Input
                  label='Nombre Institución'
                  id='institution_0'
                  name='institution_0'
                  value={formik.values.institution_0}
                  onChange={formik.handleChange}
                />
                <Form.Input
                  label='Tipo Institución'
                  id='typeInstitution_0'
                  name='typeInstitution_0'
                  value={formik.values.typeInstitution_0}
                  onChange={formik.handleChange}
                />
            </Form.Field>
            <Form.Button >Agregar Institución</Form.Button>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Situación educacional actual(Bootcamp)</label>
              <Form.Field
                control={Select}
                options={ActualOptions}
                placeholder='Seleccionar'
                selection
                value={formik.values.actual}
                onChange={(_, data) => formik.setFieldValue('actual', data.value)}
                /> 
            </Form.Field>
          </Form.Group >
          <Form.Input 
            type='text' 
            label='alguna otra competencia que quieras mencionar?'
            name='more'
            value={formik.values.more}
            onChange={formik.handleChange} />
        <Form.Button type='submit' content='Enviar' primary/>
        </Form>
    </div>
  )
}
