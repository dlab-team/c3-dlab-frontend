import React from 'react'
import { Checkbox, Form } from 'semantic-ui-react'

export default function Herramientas() {
  return (
    <Form.Field>
      <Form.Group grouped>
        <Checkbox label={{ children: 'Github' }} />
        <Checkbox label={{ children: 'Adobe Illustrator' }} />
        <Checkbox label={{ children: 'Adobe Photoshop' }} />
        <Checkbox label={{ children: 'Adobe XD' }} />
        <Checkbox label={{ children: 'AWS' }} />
        <Checkbox label={{ children: 'Docker' }} />
        <Checkbox label={{ children: 'Figma' }} />
      </Form.Group>
      <br />
      <Form.Group grouped>
        <Checkbox label={{ children: 'GIT' }} />
        <Checkbox label={{ children: 'Google Analytics' }} />
        <Checkbox label={{ children: 'Google Cloud Plataform' }} />
        <Checkbox label={{ children: 'Google Data Studio' }} />
        <Checkbox label={{ children: 'Invision' }} />
        <Checkbox label={{ children: 'InVision Studio' }} />
        <Checkbox label={{ children: 'Jira' }} />      
      </Form.Group>
      <br />
      <Form.Group grouped>
        <Checkbox label={{ children: 'Kubernetes' }} />
        <Checkbox label={{ children: 'Marvel' }} />  
        <Checkbox label={{ children: 'Microsoft Excel' }} />
        <Checkbox label={{ children: 'Microsoft Azure' }} />
        <Checkbox label={{ children: 'Miro' }} />
        <Checkbox label={{ children: 'Power BI' }} />
        <Checkbox label={{ children: 'Proto.io' }} />
      </Form.Group>   
      <br />
      <Form.Group grouped>
        <Checkbox label={{ children: 'Qlik' }} />
        <Checkbox label={{ children: 'Sketch' }} />
        <Checkbox label={{ children: 'SPSS' }} />
        <Checkbox label={{ children: 'Tableau' }} />
        <Checkbox label={{ children: 'Unity 3D' }} />
        <Checkbox label={{ children: 'Unreal Engine' }} />
        <Checkbox label={{ children: 'Zepelin' }} />
      </Form.Group>
    </Form.Field>
  )
}
