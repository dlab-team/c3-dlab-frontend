import React from 'react'
import { Container, Header, Form, Checkbox, Input } from 'semantic-ui-react'

const experienceOptions = [
  { key: '1', text: 'No poseo experiencia laboral', value: 'No poseo experiencia laboral' },
  { key: '2', text: 'Entre 0 a 1 año de experiencia laboral', value: 'Entre 0 a 1 año de experiencia laboral' },
  { key: '3', text: 'Entre 1 a 2 años de experiencia laboral', value: 'Entre 1 a 2 años de experiencia laboral' },
  { key: '4', text: 'Entre 2 a 3 años de experiencia laboral', value: 'Entre 2 a 3 años de experiencia laboral' },
  { key: '4', text: 'Más de 4 años de experiencia laboral', value: 'Más de 4 años de experiencia laboral' },
]

export default function ExperienciaTrabajo() {
  return (
    <Container>
      <Header as='h2' style={{color:"white"}}>Experiencia y Trabajo</Header>
        <Form.Input as='h4' label='URL CV*' 
          name='Subir como documento público en Google Drive o similar' />
        <Form.Input as='h4' label='URL de LinkedIn*' />
        <Form.Input as='h4' label='URL Github'/>
        <Form.Input as='h4' label='URL Portafolio/Sitio Web'/>
        <Form.Input as='h4' label='Explícanos en detalle algún proyecto que te enorgullece. Describe de que trató, tu rol en el proyecto y por qué lo elegiste (por ejemplo: arquitectura de desarrollo, equipo y tu rol en el proyecto, tecnologías utilizadas, dificultades y soluciones, funcionalidades, objetivos, etc. Recuerda NO esperamos link, sino explicación)'/>
        <Form.Select as='h4' label='Selecciona 3 habilidades blandas que te representen:*' />
        <Form.Checkbox as='h4' radio label='Líder'/>
        <Checkbox radio label='Resiliente/Perseverante' />
        <Checkbox radio label='Comunicación/Sociable' />
        <Checkbox radio label='Colaborativo/Empatía' />
        <Checkbox radio label='Aprendizaje ágil/Autónomo' />
        <Checkbox radio label='Flexible/Adaptable' />
        <Checkbox radio label='Responsable' />
        <Checkbox radio label='Innovador/Curioso' />
        <Checkbox radio label='Negociación' />
        <Checkbox radio label='Resolución de problemas' />
        <Checkbox radio label='Productividad/Iniciativa' />
        <Form.Select 
          label='¿Cuántos años de experiencia laboral posees en desarrollo de software y/o diseño?*'
          options={experienceOptions} />
        <Form.Input label='Déjanos una breve descripción con respecto tu trabajo ideal*' />
        <Header as='h3'>¿Qué tipo de trabajo estás buscando?</Header>
        <Form.Field>
          <h3>Indícanos tu disponibilidad laboral</h3>
          <Checkbox label={{ children: 'Full Time' }} />
          <Checkbox label={{ children: 'Part Time' }} />
          <Checkbox label={{ children: 'Freelancer' }} />
        </Form.Field>
        <Form.Field>
          <Header as='h3'>Qué describe mejor tu situación actual</Header>
          <Checkbox radio label='Quiero trabajar desde mi cuidad actual' value='' name='' id='' htmlFor=''/>
          <Checkbox radio label='Disponible para migrar dentro de mi pais' />
          <Checkbox radio label='Disponible para migrar a otro país' />
        </Form.Field>
        <Form.Field>
          <Header as='h3'>Cuentas con Visa de trabajo activa en: </Header>
          <Checkbox label={{ children: 'Mi pais de residencia actual' }} />
          <Checkbox label={{ children: 'Unión Europea' }} />
          <Checkbox label={{ children: 'Estados Unidos' }} />
          <Checkbox label={{ children: 'Otros Países' }} />
        </Form.Field>
    </Container>
  )
}
