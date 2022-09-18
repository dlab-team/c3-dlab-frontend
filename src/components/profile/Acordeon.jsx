import React from 'react'
import { Accordion } from 'semantic-ui-react'
import Frameworks from './Frameworks'
import Herramientas from './Herramientas'
import Language from './Language'

const AccordionExampleNested = ({language=[], framework=[], tools=[]}) => {
  const level1Panels = [
    <Language
      language= {language}
      ></Language>
]
const Level1Content = (
  <div>
    <Accordion.Accordion panels={level1Panels} />
  </div>
)
const level2Panels = [
    <Herramientas
      tools={tools}/>
]
const Level2Content = (
  <div>
    <Accordion.Accordion panels={level2Panels} />
  </div>
)
const level3Panels = [
    <Frameworks
    framework={framework}/>
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
  return ( <Accordion defaultActiveIndex={0} panels={rootPanels} styled />)
}

export default AccordionExampleNested