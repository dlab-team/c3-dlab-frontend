import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'vuejs',
    meta: 'nivel 3',
  },
  {
    header: 'html',
    meta: 'nivel 2',
  },
  {
    header: 'Docker',
    meta: 'nivel 1',
  },
]

const MiniCard = () => <Card.Group items={items} />

export default MiniCard