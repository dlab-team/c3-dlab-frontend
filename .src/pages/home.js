import React from 'react'
import { Container } from 'semantic-ui-react'
import {Active} from './components/Active'

const home = () => {
  return (
    <Container textAlign='left'>
      <Active activo={true}>estado</Active>
    </Container>
  );
};

export default home;
