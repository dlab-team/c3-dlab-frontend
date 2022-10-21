import React, { useEffect, useState } from "react";
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
const workOptionValues=[
  { key:'1', text:'Quiero trabajar desde mi cuidad actual', value:'Quiero trabajar desde mi cuidad actual' },
  { key:'2', text:'Disponible para migrar dentro de mi pais', value:'Disponible para migrar dentro de mi pais' },
  { key:'3', text:'Disponible para migrar a otro país', value:'Disponible para migrar a otro país' },
  { key:'4', text:'Otros países', value:'Otros países'}
]
const ExperienciaTrabajo=({
  handleBlur,
  handleChange,
  setFieldValue,
  urlCv,
  urlLinkedin,
  urlGithub,
  urlPortfolio,
  details,
  softSkills=[],
  skillsValue,
  yearsExperience,
  jobs=[],
  jobsValue,
  idealJob,
  betterSituation,
  visas=[],
  visasValue
}) => {
  const [visasOpt, setVisasOpt] = useState([]);

  useEffect(() => {
    const newVisasOpt = visas.map((visa) => {
      return { key: visa.id, name: visa.name, value: visa.id };
    });
    setVisasOpt(newVisasOpt);
  }, [visas]);

  const [softSkillsOpt, setSkillsOpt]= useState([]);

  useEffect(()=>{
    const newSoftSkillsOpt= softSkills.map((skill)=>{
      return {key: skill.id, name: skill.name, value:skill.id}
    });
    setSkillsOpt(newSoftSkillsOpt);
  },[softSkills]);

  const [jobsOpt, setJobsOpt]= useState([]);

  useEffect(()=>{
    const newJobsOpt= jobs.map((job)=>{
    return {key:job.id, name:job.name, value:job.id}
    });
    
    setJobsOpt(newJobsOpt);
    },[jobs]);

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
            value={urlPortfolio}
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
            {softSkillsOpt.map((item)=>(
              <CheckboxForm
                key={item.key}
                label={item.name}
                value={item.value}
                options={skillsValue}
                name="softSkills[]"
                nameID="SoftSkillId"
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
          options={experienceOptionsValues} 
          id='yearsExperience'
          name={yearsExperience} 
          placeholder='Escoge opción'
          selection
          value={yearsExperience}
          onChange={(_, data) => setFieldValue('yearsExperience', data.value)}          
          />
          </Form.Field>
        <Header as='h3'>¿Qué tipo de trabajo estás buscando?</Header>    
        <Form.Input 
          type="text"
          id='idealJob'
          name='idealJob'
          label='Déjanos una breve descripción con respecto tu trabajo ideal'
          value={idealJob} 
          onChange={handleChange}
          handleBlur={handleBlur}/>
        <br />
        <Form.Field>
          <Header>Indícanos tu disponibilidad laboral</Header>
          <br />
          <Form.Group inline>
            {jobsOpt.map((item)=>(
              <CheckboxForm
                key={item.key}
                label={item.name}
                value={item.value}
                options={jobsValue}
                name="jobs[]"
                nameID="JobId"
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
            value={betterSituation}
            onChange={(_, data)=> setFieldValue('betterSituation', data.value)}
          /> 
        </Form.Field>
        <Form.Field inline>
          <Header>Cuentas con Visa de trabajo activa en: </Header>
          <br />
          <Form.Group inline>
            {visasOpt.map((item)=>(             
              <CheckboxForm
                key={item.key}
                label={item.name}
                value={item.value}
                options={visasValue}
                name="visas[]"
                nameID="VisaId"
                />
              ))}
          </Form.Group>
        </Form.Field>
    </Container>
  )
}
export default ExperienciaTrabajo;