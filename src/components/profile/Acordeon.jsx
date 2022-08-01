import React from 'react'
import { Accordion } from 'semantic-ui-react'
import Frameworks from './Frameworks'
import Herramientas from './Herramientas'
import Lenguage from './Lenguage'

const level1Panels = [
    <Lenguage></Lenguage>
]

const Level1Content = (
  <div>
    <Accordion.Accordion panels={level1Panels} />
  </div>
)

const level2Panels = [
    <Herramientas></Herramientas>
]

const Level2Content = (
  <div>
    <Accordion.Accordion panels={level2Panels} />
  </div>
)
const level3Panels = [
    <Frameworks></Frameworks>
]
const Level3Content= (
    <div>
        <Accordion.Accordion panels={level3Panels}/>
    </div>
)
const rootPanels = [
  { key: 'panel-1', title: 'Lenguajes', content: { content: Level1Content } },
  { key: 'panel-2', title: 'Herramientas', content: { content: Level2Content } },
  { key: 'panel-3', title: 'Frameworks', content: { content: Level3Content } },


]

const AccordionExampleNested = () => (
  <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
)

export default AccordionExampleNested