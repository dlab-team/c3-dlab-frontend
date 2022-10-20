import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import MiniCard from '../components/componentsProfile/MiniCard'
import UserProfileCard from '../components/componentsProfile/UserProfileCard'

export default function ProfileView() {
  
  return (
    <Container>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={6}>
            <UserProfileCard/>
          </Grid.Column>
          <Grid.Column width={10}>
            <h2>Resumen</h2>
            <h2>Softskills</h2>
            <h2>Frameworks</h2>

            <MiniCard/>
            <h2>Herramientas</h2>
            <h2>Educación</h2>
            <h2>Orgulloso de</h2>
            <h2>Presencia Social</h2>
            <h2>Más acerca de "usuario"</h2>
            <h2>Nivel de Inglés</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  


    </Container>
  )
}
