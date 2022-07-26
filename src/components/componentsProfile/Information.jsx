import React, { useState, useEffect} from 'react'
import Frameworks from './Frameworks'
import Herramientas  from './Herramientas'
import Lenguage from './Lenguage'
import { Form, Select, Checkbox, TextArea, Header, FormButton, Container,} from 'semantic-ui-react'


const genderOptions = [
  { key: 'm', text: 'Masculino', value: 'male' },
  { key: 'f', text: 'Femenino', value: 'female' },
  { key: 'o', text: 'Otro', value: 'other' },
]

const laboralOptions= [
  { key:'c', text:'Cesante, busco empleo en TI por primera vez.', value:'Cesante, busco empleo en TI por primera vez.'},
  { key:'c.', text:'Cesante, ya he trabajado antes en TI.', value:'Cesante, ya he trabajado antes en TI.'},
  { key:'t', text:'Tengo trabajo en TI, pero busco otro.', value:'Tengo trabajo en TI, pero busco otro.'},
  { key:'t.', text:'Tengo trabajo (en otras áreas), pero busco en TI.', value:'Tengo trabajo (en otras áreas), pero busco en TI.'},
]

const EducacionalOptions= [
  {key:'u', text:'Universidad completa', value:'Universidad completa'},
  {key:'ui', text:'Universidad incompleta o cursando', value:'Universidad incompleta o cursando'},
  {key:'ip', text:'Instituto profesional o CFT completa', value:'Instituto profesional o CFT completa'},
  {key:'ic', text:'Instituto profesional o CFT en curso', value:'Instituto profesional o CFT en curso'},
  {key:'em', text:'Educación media completa', value:'Educaión media completa'},
  {key:'ei', text:'Educación media incompleta', value:'Educación media incompleta'},
  {key:'ec', text:'Escolar completa', value:'Escolar completa'},
  {key:'pc', text:'Postgrado completo', value:'Postgrado completo'},
  {key:'pi', text:'Postgrado incompleto', value:'Postgrado incompleto'},
]

const ActualOptions=  [
  {key:'e', text:'Egresado', value:'egresado'},
  {key:'t', text:'titulado', value:'titulado'},
  {key:'ec', text:'en curso', value:'en curso'}
]

const EnglishOptions=[
  {key:'b', text:'básico', value:'basic'},
  {key:'m', text:'medio', value:'medio'},
  {key:'t', text:'técnico', value:'tecnico'},
  {key:'f', text:'fluido', value:'fluido'}
]

export default function Information()  {

  const [form, setForm]=useState({})

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  }
  
  const addInstitute = () => {

  }
    return (
      <Container>
        
      </Container>
    )
  }
