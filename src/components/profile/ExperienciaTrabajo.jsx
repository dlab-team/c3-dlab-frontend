import React from "react";
import { Field } from "formik";
import { Container, Header, Form, Select } from "semantic-ui-react";
import { CheckboxForm } from "./CheckboxForm";


const experienceOptionsValues = [
  { key: '1', text: 'No poseo experiencia laboral', value: 'No poseo experiencia laboral' },
  { key: '2', text: 'Entre 0 a 1 año de experiencia laboral', value: 'Entre 0 a 1 año de experiencia laboral' },
  { key: '3', text: 'Entre 1 a 2 años de experiencia laboral', value: 'Entre 1 a 2 años de experiencia laboral' },
  { key: '4', text: 'Entre 2 a 3 años de experiencia laboral', value: 'Entre 2 a 3 años de experiencia laboral' },
  { key: '5', text: 'Más de 4 años de experiencia laboral', value: 'Más de 4 años de experiencia laboral' },
]
const softSkillsValues= [
  { key: '1', text:'Líder', value:'Líder'},
  { key: '2', text:'Resiliente, Perseverante', value:'Resiliente, Perseverante'},
  { key: '3', text:'Sociable', value:'Sociable'},
  { key: '4', text:'Responsable', value:'Responsable'},
  { key: '5', text:'Colaborativo, Empático', value:'Colaborativo, Empático'},
  { key: '6', text:'Aprendizaje ágil/Autónomo', value:'Aprendizaje ágil/Autónomo'},
  { key: '7', text:'Flexible, adaptable', value:'Flexible, adaptable'},
  { key: '8', text:'Productivo, iniciativa', value:'Productivo, iniciativa'},
  { key: '9', text:'Innovador/Curioso', value:'Innovador/Curioso'},
  { key: '10', text:'Negociación', value:'Negociación'},
  { key: '11', text:'Resulución de problemas', value:'Resulución de problemas'},
]
const workOptionValues=[
  { key:'1', text:'Quiero trabajar desde mi cuidad actual', value:'Quiero trabajar desde mi cuidad actual' },
  { key:'2', text:'Disponible para migrar dentro de mi pais', value:'Disponible para migrar dentro de mi pais' },
  { key:'3', text:'Disponible para migrar a otro país', value:'Disponible para migrar a otro país' },
  { key:'4', text:'Otros países', value:'Otros países'}
]
const jobsOptionsValues=[
  { key:'1', text:'Full Time', value:'Full Time'},
  { key:'2', text:'Part Time', value:'Part Time'},
  { key:'3', text:'Freelancer', value:'Freelancer'}
]
const visasValues=[
  { key:'1', text:'Mi pais de residencia actual', value:'Mi pais de residencia actual'},
  { key:'2', text:'Unión Europea', value:'Unión Europea'},
  { key:'3', text:'Estados Unidos', value:'Estados Unidos'}
]
const ExperienciaTrabajo=({
  handleBlur,
  handleChange,
  setFieldValue,
  urlCv,
  urlLinkedin,
  urlGithub,
  urlPortafolio,
  details,
  softSkills,
  yearsExperience,
  jobs,
  idealJob,
  workOption,
  visas
}) => {
  return (
    <Container>
     <Header>Experiencia y Trabajo</Header>
        <Form.Group grouped>
          <Form.Input 
            type="text"
            label='URL CV (Subir como documento público en Google Drive o similar)*' 
            name='urlCv'
            id='urlCv'
            value={urlCv}
            onChange={handleChange}/>
          <Form.Input 
            type="text"
            label='URL de LinkedIn*'
            name='urlLinkedin'
            id='urlLinkedin'
            value={urlLinkedin}
            onChange={handleChange}/>
        </Form.Group>
        <Form.Group grouped>
          <Form.Input 
            type="text"
            label='URL Github'
            name='urlGithub'
            id='urlGithub'
            value={urlGithub}
            onChange={handleChange}/>
          <Form.Input 
            type="text"
            label='URL Portafolio/Sitio Web'
            name='urlPortafolio'
            id='urlPortfolio'
            value={urlPortafolio}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group>
          <Form.Input 
            type="text"
            label='Explícanos en detalle algún proyecto que te enorgullece. Describe de que trató, tu rol en el proyecto y por qué lo elegiste (por ejemplo: arquitectura de desarrollo, equipo y tu rol en el proyecto, tecnologías utilizadas, dificultades y soluciones, funcionalidades, objetivos, etc. Recuerda NO esperamos link, sino explicación)'
            name='details'
            id='details'
            value={details}
            onChange={handleChange} 
            />   
        </Form.Group>
        <Header>Selecciona 3 habilidades blandas que te representen:</Header>
        <Form.Group inline>
          <Form.Group grouped>
            {softSkillsValues.map((item)=>(
              <CheckboxForm
                key={item.key}
                label={item.text}
                value={item.value}
                options={softSkills}
                name="softSkills[]"
                />
              ))}
            </Form.Group>     
        </Form.Group>
        <br />
        <Form.Field required>
        <label>
          ¿Cuántos años de experiencia laboral posees en desarrollo de software y/o diseño?
        </label>
        <Field require
          as={Select}
          placeholder='Escoge opción'
          id='yearsExperience'
          name={yearsExperience} 
          options={experienceOptionsValues} 
          selection
          value={yearsExperience}
          onChange={(_, data) => setFieldValue('yearsExperience', data.value)}
          />
          </Form.Field>
        <Header as='h3'>¿Qué tipo de trabajo estás buscando?</Header>    
        <Form.Input 
          type="text"
          id='descriptionIdealJob'
          name='descriptionIdealJob'
          label='Déjanos una breve descripción con respecto tu trabajo ideal'
          value={idealJob} 
          onChange={handleChange}
          handleBlur={handleBlur}/>
        <br />
        <Form.Field>
          <Header>Indícanos tu disponibilidad laboral</Header>
          <br />
          <Form.Group inline>
            {jobsOptionsValues.map((item)=>(
              <CheckboxForm
                key={item.key}
                label={item.text}
                value={item.value}
                options={jobs}
                name="jobs[]"
                />
              ))}
          </Form.Group>         
        </Form.Field>
        <Form.Field>
          <Header>Qué describe mejor tu situación actual</Header>
          <Form.Field
            control={Select}
            options={workOptionValues}
            placeholder='Opciones de trabajo'
            selection
            value={workOption}
            onChange={(_, data)=> setFieldValue('workOption', data.value)}
          /> 
        </Form.Field>
        <Form.Field inline>
          <Header>Cuentas con Visa de trabajo activa en: </Header>
          <br />
          <Form.Group inline>
            {visasValues.map((item)=>(
              <CheckboxForm
                key={item.key}
                label={item.text}
                value={item.value}
                options={visas}
                name="visas[]"
                />
              ))}
          </Form.Group>
        </Form.Field>
    </Container>
  )
}
export default ExperienciaTrabajo;