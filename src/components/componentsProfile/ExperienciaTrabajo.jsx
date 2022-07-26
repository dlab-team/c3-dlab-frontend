import React from 'react'
import { Header, Form } from 'semantic-ui-react'

const experienceOptions = [
  { key: '1', text: 'No poseo experiencia laboral', value: 'No poseo experiencia laboral' },
  { key: '2', text: 'Entre 0 a 1 año de experiencia laboral', value: 'Entre 0 a 1 año de experiencia laboral' },
  { key: '3', text: 'Entre 1 a 2 años de experiencia laboral', value: 'Entre 1 a 2 años de experiencia laboral' },
  { key: '4', text: 'Entre 2 a 3 años de experiencia laboral', value: 'Entre 2 a 3 años de experiencia laboral' },
  { key: '5', text: 'Más de 4 años de experiencia laboral', value: 'Más de 4 años de experiencia laboral' },
]

export default function ExperienciaTrabajo() {
  
  return (
    <Form >
      <Header as='h2' style={{color:"white"}}>Experiencia y Trabajo</Header>
        <Form.Input 
          label='URL CV*' 
          name='Subir como documento público en Google Drive o similar' />
        <Form.Input label='URL de LinkedIn*' />
        <Form.Input label='URL Github'/>
        <Form.Input label='URL Portafolio/Sitio Web'/>
        <Form.Input label='Explícanos en detalle algún proyecto que te enorgullece. Describe de que trató, tu rol en el proyecto y por qué lo elegiste (por ejemplo: arquitectura de desarrollo, equipo y tu rol en el proyecto, tecnologías utilizadas, dificultades y soluciones, funcionalidades, objetivos, etc. Recuerda NO esperamos link, sino explicación)'/>
        <Header>Selecciona 3 habilidades blandas que te representen:*</Header>
        <Form.Group inline>
          <Form.Checkbox radio label='Líder'/>
          <Form.Checkbox radio label='Resiliente/Perseverante' />
          <Form.Checkbox radio label='Comunicación/Sociable' />         
          <Form.Checkbox radio label='Responsable' />
        </Form.Group>
        <Form.Group inline>
          <Form.Checkbox radio label='Colaborativo/Empatía' />
          <Form.Checkbox radio label='Aprendizaje ágil/Autónomo' />
          <Form.Checkbox radio label='Flexible/Adaptable' />
          <Form.Checkbox radio label='Productividad/Iniciativa' />
        </Form.Group>
        <Form.Group>
          <Form.Checkbox radio label='Innovador/Curioso' />
          <Form.Checkbox radio label='Negociación' />
          <Form.Checkbox radio label='Resolución de problemas' />          
        </Form.Group>
        <br />
        <Form.Select 
          label='¿Cuántos años de experiencia laboral posees en desarrollo de software y/o diseño?*'
          placeholder='Escoge opción'
          options={experienceOptions} />
        <Header as='h3'>¿Qué tipo de trabajo estás buscando?</Header>    
        <Form.Input 
          label='Déjanos una breve descripción con respecto tu trabajo ideal*'
          name='string' />
        <br />
        <Form.Field>
          <Header as='h3'>Indícanos tu disponibilidad laboral</Header>
          <Form.Group inline>
            <Form.Checkbox label={{ children: 'Full Time' }} />
            <Form.Checkbox label={{ children: 'Part Time' }} />
            <Form.Checkbox label={{ children: 'Freelancer' }} />            
          </Form.Group>
        </Form.Field>
        <Form.Field>
          <br />
          <Header as='h3'>Qué describe mejor tu situación actual</Header>
          <Form.Group inline>
           <Form.Checkbox radio label='Quiero trabajar desde mi cuidad actual' value='' name='' id='' htmlFor=''/>
           <Form.Checkbox radio label='Disponible para migrar dentro de mi pais' />
           <Form.Checkbox radio label='Disponible para migrar a otro país' />           
          </Form.Group>
        <br />
        </Form.Field>
        <Form.Field inline>
          <Header as='h3'>Cuentas con Visa de trabajo activa en: </Header>
          <br />
          <Form.Group inline>
            <Form.Checkbox label={{ children: 'Mi pais de residencia actual' }} />
            <Form.Checkbox label={{ children: 'Unión Europea' }} />
            <Form.Checkbox label={{ children: 'Estados Unidos' }} />
            <Form.Checkbox label={{ children: 'Otros Países' }} />            
          </Form.Group>
        </Form.Field>
    </Form>
  )
}
