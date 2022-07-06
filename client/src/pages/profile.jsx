/*Usuario tiene los estados: Activo (perfil laboral no completo), Job Ready (perfil laboral completo)

Usuario tiene: Nombres, Número de teléfono, ubicación (país), género, cargo a su interés (ej.: Full stack dev, front end dev, UX/UI, data science, etc)

El usuario debe poder ingresar sus conocimientos y sus niveles (los cuales deben estar explicados), ver ejemplo en: Postula 

Cuando el usuario esté en estado “Activo”, debe haber un banner o mensaje motivandolo a llenar su perfil

Cuando el usuario este en estado Job Ready, se le mostrará su dashboard (o se le redirigirá a este, si acaba de terminarlo)
*/
import React, {Fragment} from 'react';
import User from "./components/User"
import Container from "./components/Container"
import { faHandsHolding, faLayerGroup, faPersonChalkboard, faBook} from '@fortawesome/free-solid-svg-icons'


export function Profile  ( )  {
  
  return (
    <Fragment>
      <User></User>
      <Container icon={faHandsHolding} titulo="Estado" response="Activo"></Container>
      <Container icon={faLayerGroup} titulo="Stack" response="Front"></Container>
      <Container icon={faBook} titulo="Test Rendidos" response="5"></Container>
      <Container icon={faPersonChalkboard} titulo="Show the Code" response="3"></Container>
      </Fragment>
  )
}

export default Profile;