import React from 'react'
import { useFormik, } from 'formik';
import { Container, Form, Header, Checkbox, Select } from 'semantic-ui-react'

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

const jobOptions = [
  {
    key:"fs",
    text:"Desarrollador/a Full Stack",
    value:"Desarrollador/a Full Stack"
  },
  {
    key:"be",
    text:"Desarrollador/a Back End",
    value:"Desarrollador/a Back End"
  },
  {
    key:"fe",
    text:"Desarrollador/a Front End",
    value:"Desarrollador/a Front End"
  },
  {
    key:"ux",
    text:"Diseñador/a UX / UX Research o UI",
    value:"Diseñador/a UX / UX Research o UI"
  },
  {
    key:"dm",
    text:"Desarrollador/a Móvil",
    value:"Desarrollador/a Móvil"
  },
  {
    key:"ds",
    text:"Data Scientist o especialista machine learning",
    value:"Data Scientist o especialista machine learning"
  },
  {
    key:"id",
    text:"Ingeniería de Datos",
    value:"Ingeniería de Datos"
  },
]
export default function InfoPersonal() {
  const formik= useFormik({
    initialValues:{
      name:'',
      lastName:'',
      email:'',
      phone:'',
      city:'',
      country:'',
      gender:'',
      laboral:'',
      job_0:'',
      job_1:'',
      job_2:'',
      job_3:'',
      job_4:'',
      job_5:''
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
              <label>Nombre</label>
              <Form.Input
                type='text'
                id='name' 
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange} />
            </Form.Field>
            <Form.Field required>
              <label>Apellido</label>
              <Form.Input
              type='text'
              id='lastName'
              name='lastName'
              value={formik.values.lastName}
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
              id='phone'
              name='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}/>
            </Form.Field>               
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label>Ciudad</label>
            <Form.Input
              type='text'
              id='city'
              name='city'
              value={formik.values.city}
              onChange={formik.handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>País/Región</label>
              <Form.Input
              type='text'
              id='country'
              name='country'
              value={formik.values.country}
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
                selection
                value={formik.values.gender}
                onChange={(_, data) => formik.setFieldValue('gender', data.value)}
              />
            </Form.Field>  
            <Form.Field>
              <label>¿Cuál es tu estado laboral actual?</label>
              <Form.Field
                control={Select}
                options={laboralOptions}
                placeholder='Estado laboral'
                selection
                value={formik.values.laboral}
                onChange={(_, data)=> formik.setFieldValue('laboral', data.value)}
              />       
            </Form.Field>        
          </Form.Group>
          <br />
          <Form.Group widths= 'equal'>
            <Form.Field require>
              <label>A cuáles cargos te gustaría optar</label>
            </Form.Field>  
            <Form.Field>
              <Form.Checkbox
                control={Checkbox} 
                label='Desarrollador Full Stack'
                name='job[0]'
                value='Desarrollador Full Stack'
                onChange={(_, data)=> formik.setFieldValue('job_0', data.value)}
                />
              <Form.Field 
                control={Checkbox} 
                label='Desarrollador/a Back End'
                name='job[1]'
                value='Desarrollador/a Back End'
                onChange={(_, data)=> formik.setFieldValue('job_1', data.value)}
       />
              <Form.Field 
                control={Checkbox} 
                label='Desarrollador/a Front End'
                name='job'
                value='Desarrollador/a Front End'
                onChange={(_, data)=> formik.setFieldValue('job_2', data.value)}
             />
            </Form.Field> 
            <Form.Field>
              <Form.Field 
                control={Checkbox} 
                label='Diseñador/a UX / UX Research o UI'
                name='job'
                value='Diseñador/a UX / UX Research o UI'
                onChange={(_, data)=> formik.setFieldValue('job_3', data.value)}
                />
              <Form.Field 
                control={Checkbox} 
                label='Desarrollador/a Móvil'
                name='job'
                value='Desarrollador Móvil'
                onChange={(_, data)=> formik.setFieldValue('job_4', data.values)}
                />         
            </Form.Field>  
            <Form.Field>
              <Form.Field 
                control={Checkbox} 
                label='Data Scientist o especialista machine learning'
                name='job'
                value='Data Scientist o especialista machine learning'
                onChange={(_, data)=> formik.setFieldValue('job_5', data.value)}
                />
              <Form.Field 
                control={Checkbox} 
                label='Ingeniería de Datos'
                name='job'
                value='Ingeniería de Datos'
                onChange={(_, data)=> formik.setFieldValue('job_6', data.value)}
                /> 
            </Form.Field>
          </Form.Group>
          
          <Form.Button type="submit" content="Enviar" primary />
        </Form>
    </Container>
  )
}
