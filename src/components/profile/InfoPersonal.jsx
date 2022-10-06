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
const InfoPersonal=({
  handleChange,
  handleBlur,
  setFieldValue,
  name,
  lastName,
  phone,
  city,
  country,
  options,
  employmentStatus,
  gender,
  professionalPositions=[],
}) => {
  const positionOpt= professionalPositions.map((pos)=>{
    return {key:pos.id, name:pos.name, value:pos.id};
  });
  return (
    <Container>
    <Header>Información Personal</Header>
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='name'>Nombre</label>                        
        <Field 
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        id='name'
        name='name'
        value={name}/>
      </Form.Field>
      <Form.Field>
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
      <Form.Field>
        <label htmlFor='phone'>Número de teléfono Móvil</label>
        <Field
        type='text'
        id='phone'
        name='phone'
        value={phone}
        onChange={handleChange}
        onBlur={handleBlur}/>
      </Form.Field>
      <Form.Field required>
        <label htmlFor='city'>Ciudad</label>
      <Field
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
      <Form.Field>
        <label htmlFor='country'>País/Región</label>
        <Field
        type='text'
        id='country'
        name='country'
        value={country}
        onChange={handleChange}
        onBlur={handleBlur}
        />
      </Form.Field>   
      <Form.Field>
          <label htmlFor='gender'>¿Con cuál género te identificas?</label>
          <Field
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
      <Form.Field >
      <label htmlFor='positions'>¿a cuáles cargos te gustaría optar?</label>
        {professionalPositions.map((item)=>(
          <CheckboxForm
            key={item.key}
            label={item.name}
            value={item.value}
            options={positionOpt}
            name="professionalPositions[]"
            />
          ))}
        </Form.Field>     
    </Form.Group>
  </Container>
  )
  }
  export default InfoPersonal;
