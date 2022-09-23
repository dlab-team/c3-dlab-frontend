import React from 'react'
import { Accordion } from 'semantic-ui-react'
import Frameworks from './Frameworks'
import Herramientas from './Herramientas'
import Language from './Language'

const Acordeon = ({language=[], framework=[], tools=[], values, setFieldValue}) => {
  return (
    <>
    <details >
      <summary>
        <h4>
          Lenguages
        </h4>
      </summary>
      <Language
      language= {language}
      nameLanguage={values.language}
      setFieldValue={setFieldValue}
      ></Language>
    </details>
    <details>
    <summary>
        <h4>
          Frameworks
        </h4>
      </summary>
      <Frameworks
      framework={framework}
      nameFramework={values.framework}
      setFieldValue={setFieldValue}
      />
    </details>
    <details>
    <summary>
        <h4>
          Herramientas
        </h4>
      </summary>
      <Herramientas
      tools={tools}
      nameTools={values.tools}
      setFieldValue={setFieldValue}
      />
    </details>
    </>
  )
}
/*
const AccordionExampleNested = ({language=[], framework=[], tools=[], values, setFieldValue}) => {
  const level1Panels = [

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
}*/

export default Acordeon