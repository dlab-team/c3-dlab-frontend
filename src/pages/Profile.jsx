
import React, {Fragment} from 'react';
import Target from "./components/Target"
import { faHandsHolding, faLayerGroup, faPersonChalkboard, faBook} from '@fortawesome/free-solid-svg-icons'
import Name from './components/Name';
import { Card } from 'semantic-ui-react';


export function Profile  ( )  {
  
  return (
    <Fragment>
      <Name></Name>
      <Card.Group itemsPerRow={3}>
        <Target onclick={faBook} icon={faHandsHolding} titulo="Estado" response="JobReady"></Target>
        <Target icon={faLayerGroup} titulo="Stack" response="Front"></Target>
        <Target icon={faBook} titulo="Test Rendidos" response="5"></Target>
        <Target icon={faPersonChalkboard} titulo="Show the Code" response="3"></Target>
        <Target titulo="blog" response="dashboard"></Target>
      </Card.Group>
      
      </Fragment>
  )
}

export default Profile;