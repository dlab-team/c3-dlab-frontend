import React from 'react'
import { Form, Header, Select } from 'semantic-ui-react'


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
  return (
    <div>
        <Form>
          <Header as='h2' >Perfil Educacional</Header>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Máximo nivel educacional</label>
              <Form.Field
                 control={Select}
                 options={EducacionalOptions}
                  placeholder='Seleccionar'
                  search
                  searchInput={{ id: 'form-select-control-select' }}
                />               
            </Form.Field>
            <Form.Field>
              <label>Nivel Inglés</label>
              <Form.Field
                control={Select}
                options={EnglishOptions}
                placeholder='Seleccionar'
                search
                searchInput={{ id: 'form-select-control-laboral' }}
              /> 
            </Form.Field>
          </Form.Group>
          <p>A continuación, carreras profesionales, cursos, bootcamp o certificaciones cursadas relacionadas al desarrollo de software, diseño o TI (puedes indicarnos las más importantes o actuales):</p>
          <Form.Group widths='equal'>
            <Form.Field required>
                <Form.Input
                  label='Nombre de la carrera, curso o bootcamp'
                  id='form-input-control'
                />
                <Form.Input
                  label='Nombre Institución'
                  id='form-input-control'
                  name=''
                />
                <Form.Input
                  label='Tipo Institución'
                  id=''
                  name='(Universidad, CFT, Academia'
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
                multiple={true}
                value={ActualOptions}
                search
                searchInput={{ id: 'form-select-control-laboral' }}
              /> 
            </Form.Field>
          </Form.Group >
          <Form.Input label='alguna otra competencia que quieras mencionar?'/>
        </Form>
    </div>
  )
}
