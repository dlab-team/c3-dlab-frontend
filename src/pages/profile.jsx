
import React, {Fragment} from 'react';
import Target from "../components/componentsProfile/Target";
import { faAnchor, faHandsHolding, faLayerGroup, faPersonChalkboard, faBook, faAdjust} from '@fortawesome/free-solid-svg-icons';
import Name from '../components/componentsProfile/Name';
import Modal from '../components/componentsProfile/Modal';
import { Card, Container } from 'semantic-ui-react';

export function Profile  ( )  {
  
  return (
    <Container>
      <Name></Name>
      <Card.Group itemsPerRow={3}>
        <Target icon={faHandsHolding} titulo="Estado" activo={true} response="JobReady"></Target>
        <Target icon={faLayerGroup} titulo="Stack" response="Front"></Target>
        <Target icon={faBook} titulo="Test Rendidos" response="5"></Target>
        <Target icon={faPersonChalkboard} titulo="Show the Code" response="3"></Target>
        <Target icon={faAdjust} titulo="blog" response="dashboard"></Target>
        <Target icon={faAnchor}titulo="ver mi Perfil completo"></Target>
      </Card.Group>
      <Modal></Modal>
    </Container> 
  )
}

export default Profile;