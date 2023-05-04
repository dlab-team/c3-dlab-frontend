import React from 'react'
import { Accordion } from 'semantic-ui-react'
import Frameworks from './Frameworks'
import Herramientas from './Herramientas'
import Language from './Language'

const Acordeon = ({languages=[], frameworks=[], tools=[], values, setFieldValue}) => {
  return (
    <>
    <details >
      <summary>
        <h4>
          Lenguajes
        </h4>
      </summary>
      <Language
      dataLanguages= {languages}
      nameLanguage={values.languages}
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
      dataFrameworks={frameworks}
      nameFramework={values.frameworks}
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
      dataTools={tools}
      nameTool={values.tools}
      setFieldValue={setFieldValue}
      />
</details>
    </>
  )
}

export default Acordeon