import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import '../../assets/profile.css'

export default function Postula() {
  return (
    <Container textAlign='justified' className='margin'>
      <Header as='h2'>POSTULA Y ÚNETE A DEVSAFÍO</Header>
      <Header as='h3'> Devsafío es una iniciativa que une talento junior Latinoamericano (trainee, bootcamp, entre otros) con mentores senior TI para potenciar su empleabilidad inicial e impactar la industria tecnológica.
      <br />
        Si estás buscando empleo como Junior o Trainee (Desarrollo, Diseño UX/UI y Data Science) te dejamos este formulario para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en Latinoamérica.
        <br />
        ¿Debo pagar algo por inscribirme y participar?
        <br />
        ¡No! Participar en nuestras ofertas no tiene costo para ti. Una vez seas seleccionado para la contratación, se te hará una oferta remunerada inferior a la de mercado, sin embargo, tendrás el beneficio y la garantía de ser apoyado y guiado de forma personalizada por un mentor senior.
        Este programa tiene una duración de 3 meses, posterior a esto tienes la posibilidad de ser contratado directamente por la empresa, con sus distintos beneficios y remuneración acorde al mercado.
        <br />
        Si quieres saber más de nosotros y nuestras actividades, nos puedes seguir en: https://www.linkedin.com/company/devsafio
        <br />
        ¡Vamos con todo!
      </Header>
      <Header as='h3'>
        Tiempo: 5-10 minutos
      </Header>
    </Container>
  )
}
