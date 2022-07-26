import React from 'react'
import {Container, Header, Form} from 'semantic-ui-react'
import '../assets/profile.css'
import ExperienciaTrabajo from '../components/componentsProfile/ExperienciaTrabajo'
import Herramientas from '../components/componentsProfile/Herramientas'
import Frameworks from '../components/componentsProfile/Frameworks'
import Lenguage from '../components/componentsProfile/Lenguage'
import InfoPersonal from '../components/componentsProfile/InfoPersonal'
import PerfilEducacional from '../components/componentsProfile/PerfilEducacional'

export default function Register
() {
  return (
    <Container textAlign='justified' className='margin'>
      <Header as='h2'>POSTULA Y ÚNETE A DEVSAFÍO</Header>
      <Header as='h3'> Devsafío es una iniciativa que une talento junior Latinoamericano (trainee, bootcamp, entre otros) con mentores senior TI para potenciar su empleabilidad inicial e impactar la industria tecnológica.
        Si estás buscando empleo como Junior o Trainee (Desarrollo, Diseño UX/UI y Data Science) te dejamos este formulario para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en Latinoamérica.
        ¿Debo pagar algo por inscribirme y participar?
        ¡No! Participar en nuestras ofertas no tiene costo para ti. Una vez seas seleccionado para la contratación, se te hará una oferta remunerada inferior a la de mercado, sin embargo, tendrás el beneficio y la garantía de ser apoyado y guiado de forma personalizada por un mentor senior.
        Este programa tiene una duración de 3 meses, posterior a esto tienes la posibilidad de ser contratado directamente por la empresa, con sus distintos beneficios y remuneración acorde al mercado.
        Si quieres saber más de nosotros y nuestras actividades, nos puedes seguir en: https://www.linkedin.com/company/devsafio
        ¡Vamos con todo!
      </Header>
      <Header as='h3'>
        Tiempo: 5-10 minutos
      </Header>
      <hr />
      <Container className='colordev'>
      <Header as='h2'style={{color:"white"}}>Perfil Laboral</Header>
      <Header as='h3' style={{color:"white"}} >
        Queremos conocer tus competencias y experiencia. 
        A continuación podrás elegir las competencias que conoces con respecto a 3 niveles:
      </Header>
      <Header as='h3' style={{color:"white"}}> 
        <strong>Nivel 1: </strong> 
        No tengo experiencia laboral, pero he desarrollado proyectos utilizado esta tecnología/herramienta.
      </Header>
        <Header as='h3' style={{color:"white"}} >  
          <strong>Nivel 2: </strong>
          Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante.
        </Header>
        <Header as='h3' style={{color:"white"}}>
          <strong>Nivel 3: </strong>
          Tengo experiencia laboral (+2 años) y/o autonomía completa a la hora de desarrollar proyectos.
          Ten en cuenta, de acuerdo a las competencias declaradas, te pediremos que seas capaz de demostrarlo de forma práctica durante el proceso de selección
        </Header>            
        <Header as='h3' style={{color:"white"}}>Lenguaje nivel 1</Header>
        <Lenguage></Lenguage>
        <Header as='h3' style={{color:"white"}}>Bases o frameworks nivel 1</Header>
        <Frameworks></Frameworks>
        <Header as='h3' style={{color:"white"}}>Herramientas nivel 1</Header>
        <Herramientas></Herramientas>
        <Header as='h2'style={{color:"white"}}>Indícanos tus conocimientos a Nivel 2 (Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante):</Header>
        <Header as='h3' style={{color:"white"}}>Lenguaje nivel 2</Header>
        <Lenguage></Lenguage>
        <Header as='h3' style={{color:"white"}}>Bases o Frameworks nivel 2</Header>
        <Frameworks></Frameworks>
        <Header as='h3' style={{color:"white"}}>Herramientas nivel 2</Header>
        <Herramientas></Herramientas>
        <ExperienciaTrabajo></ExperienciaTrabajo>
        <Form.Button content='Enviar' primary/>
      </Container>
    </Container>
  )
}