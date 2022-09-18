import React from 'react'
import { Field } from 'formik'
import { Select, Container, Form, Header } from 'semantic-ui-react'
import { CheckboxForm } from './CheckboxForm';

const laboralOptions = [
  {
    key: "c",
    text: "Cesante, busco empleo en TI por primera vez.",
    value: "first_time_jobseeker",
  },
  {
    key: "c.",
    text: "Cesante, ya he trabajado antes en TI.",
    value: "unemployed_jobseeker",
  },
  {
    key: "t",
    text: "Tengo trabajo en TI, pero busco otro.",
    value: "job_changer",
  },
  {
    key: "t.",
    text: "Tengo trabajo (en otras áreas), pero busco en TI.",
    value: "different_field_jobseeker",
  },
];
const jobsValues = [
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
const InfoPersonal=({
  handleChange,
  handleBlur,
  setFieldValue,
  nameInfo,
  lastName,
  phone,
  city,
  country,
  options,
  employmentStatus,
  gender,
  positions,
  
}) => {
  return (
    <Container>
    <Header>Información Personal</Header>
    <Form.Group widths='equal'>
      <Form.Field required>
        <label htmlFor='nameInfo'>Nombre</label>                        
        <Field 
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        id='nameInfo'
        name='nameInfo'
        value={nameInfo}/>
      </Form.Field>
      <Form.Field required>
        <label htmlFor='lastName'>Apellido</label>                        
        <Field 
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        id='lastName'
        name='lastName'
        value={lastName}/>
      </Form.Field>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field required>
        <label htmlFor='phone'>Número de teléfono Móvil</label>
        <Field required
        type='text'
        id='phone'
        name='phone'
        value={phone}
        onChange={handleChange}
        onBlur={handleBlur}/>
      </Form.Field>
      <Form.Field required>
        <label htmlFor='city'>Ciudad</label>
      <Field required
        type='text'
        id='city'
        name='city'
        value={city}
        onChange={handleChange}
        onBlur={handleBlur}
        />
      </Form.Field>         
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field required>
        <label htmlFor='country'>País/Región</label>
        <Field required
        type='text'
        id='country'
        name='country'
        value={country}
        onChange={handleChange}
        onBlur={handleBlur}
        />
      </Form.Field>   
      <Form.Field required>
          <label htmlFor='gender'>¿Con cuál género te identificas?</label>
          <Field required
            as={Select}
            options={options}
            id='gender'
            name={gender}
            placeholder='Género'
            selection
            value={gender}
            onChange={(_, data) => setFieldValue('gender', data.value)}
          />
      </Form.Field>                    
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field>
        <label>¿Cuál es tu estado laboral actual?</label>
        <Form.Field
          control={Select}
          options={laboralOptions}
          placeholder='Estado laboral'
          selection
          value={employmentStatus}
          onChange={(_, data)=> setFieldValue('employmentStatus', data.value)}
        />       
      </Form.Field>   
      <Form.Group grouped>
      <label htmlFor='positions'>¿a cuáles cargos te gustaría optar?</label>
        {jobsValues.map((item)=>(
          <CheckboxForm
            key={item.key}
            label={item.text}
            value={item.value}
            options={positions}
            name="positions[]"
            />
          ))}
        </Form.Group>     
    </Form.Group>
  </Container>
  )
  }
  export default InfoPersonal;
