import React from 'react'
import { Card, Icon} from 'semantic-ui-react'

const extra = (
  <>
  <h4>
    trabajo ideal
  </h4>
    <a>
    <Icon name='user' />
    6 test realizados
  </a>  
  </>
)


const UserProfileCard = () => (
  <Card
    fluid
    color='teal'
    image='/images/avatar/large/elliot.jpg'
    header='Nombre'
    meta='Front End'
    description='jhon'
    extra={extra}
  >
    </Card>
)

export default UserProfileCard