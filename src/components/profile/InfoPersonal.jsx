import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Header, Checkbox, Select, Button} from 'semantic-ui-react'

const genderOptions = [
  { key: "m", text: "Masculino", value: "male" },
  { key: "f", text: "Femenino", value: "female" },
  { key: "o", text: "Otro", value: "other" },
];

const laboralOptions = [
  {
    key: "c",
    text: "Cesante, busco empleo en TI por primera vez.",
    value: "Cesante, busco empleo en TI por primera vez.",
  },
  {
    key: "c.",
    text: "Cesante, ya he trabajado antes en TI.",
    value: "Cesante, ya he trabajado antes en TI.",
  },
  {
    key: "t",
    text: "Tengo trabajo en TI, pero busco otro.",
    value: "Tengo trabajo en TI, pero busco otro.",
  },
  {
    key: "t.",
    text: "Tengo trabajo (en otras áreas), pero busco en TI.",
    value: "Tengo trabajo (en otras áreas), pero busco en TI.",
  },
];
export default function InfoPersonal() {
  const formik= useFormik({
    initialValues:{
      nombre:'',
      apellido:'',
      email:'',
      telefono:'',
      ciudad:'',
      pais:''
    },
    onSubmit:(values)=>{
      console.log(JSON.stringify(values))
    }
  })

  return (
    <Container>
        <Header as='h2' >Información Personal</Header>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label htmlFor='name'>Nombre</label>
              <Form.Input
              type='text'
              id='name'
              name='name'
              value={formik.values.nombre}
              onChange={formik.handleChange}
            />  
            </Form.Field>
            <Form.Field required>
              <label htmlFor='lastname'>Apellido</label>
              <Form.Input
              type='text'
              id='lastname'
              name='lastname'
              value={formik.values.apellido}
              onChange={formik.handleChange}
            />
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label htmlFor='email'>Email</label>
              <Form.Input
              type='text'
              id='email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            </Form.Field>   
            <Form.Field required>
              <label>Número de teléfono Móvil</label>
              <Form.Input
              type='text'
              id='telefono'
              name='telefono'
              value={formik.values.telefono}
              onChange={formik.handleChange}/>
            </Form.Field>               
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label>Ciudad</label>
            <Form.Input
              type='text'
              id='ciudad'
              name='ciudad'
              value={formik.values.ciudad}
              onChange={formik.handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>País/Región</label>
              <Form.Input
              type='text'
              id='pais'
              name='pais'
              value={formik.values.pais}
              onChange={formik.handleChange}
              />
            </Form.Field>                  
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label>¿Con cuál género te identificas?</label>
              <Form.Field
                control={Select}
                options={genderOptions}
                placeholder='Género'
                search
                searchInput={{ id: 'form-select-control-gender' }}
              />
            </Form.Field>  
            <Form.Field>
              <label>¿Cuál es tu estado laboral actual?</label>
              <Form.Field
                control={Select}
                options={laboralOptions}
                placeholder='Estado laboral'
                search
                searchInput={{ id: 'form-select-control-laboral' }}
              />       
            </Form.Field>        
          </Form.Group>
          <br />
          <Form.Group widths= 'equal'>
            <Form.Field require>
              <label>A cuáles cargos te gustaría optar</label>
            </Form.Field>  
            <Form.Field>
              <Form.Field control={Checkbox} label='Desarrollador/a Full Stack'/>
              <Form.Field control={Checkbox} label='Desarrollador/a Back End'/>
              <Form.Field control={Checkbox} label='Desarrollador/a Front End'/>
            </Form.Field> 
            <Form.Field>
              <Form.Field control={Checkbox} label='Diseñador/a UX / UX Research o UI'/>
              <Form.Field control={Checkbox} label='Desarrollador/a Móvil'/>         
            </Form.Field>  
            <Form.Field>
              <Form.Field control={Checkbox} label='Data Scientist o especialista machine learning'/>
              <Form.Field control={Checkbox} label='Ingeniería de Datos'/> 
            </Form.Field>
          </Form.Group>
          
          <Form.Button type="submit" content="Enviar" primary />
        </Form>
    </Container>
  )
}