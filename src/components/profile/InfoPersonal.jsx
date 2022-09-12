import React from 'react'
import {  Field  } from 'formik'
import {  Checkbox, Select, Container, Form, Header } from 'semantic-ui-react'

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
const InfoPersonal=({
  handleChange,
  handleBlur,
  nameInfo,
  lastName,
  email,
  phone,
  city,
  country,
  options,
  employmentStatus,
  gender,
  idealJob,
  setFieldValue
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
        <label htmlFor='email'>Email</label>
        <Field
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      </Form.Field>   
      <Form.Field required>
        <label>Número de teléfono Móvil</label>
        <Field required
        type='text'
        id='phone'
        name='phone'
        value={phone}
        onChange={handleChange}
        onBlur={handleBlur}/>
      </Form.Field>               
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field required>
        <label>Ciudad</label>
      <Field required
        type='text'
        id='city'
        name='city'
        value={city}
        onChange={handleChange}
        onBlur={handleBlur}
        />
      </Form.Field>
      <Form.Field required>
        <label>País/Región</label>
        <Field required
        type='text'
        id='country'
        name='country'
        value={country}
        onChange={handleChange}
        onBlur={handleBlur}
        />
      </Form.Field>                  
    </Form.Group>
      <Form.Group widths='equal'>
        <Form.Field required>
          <label>¿Con cuál género te identificas?</label>
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
        <br />
        </Form.Group>
      </Container>
  )
  }
      
  export default InfoPersonal;

                    /*      
                    <Form.Group widths= 'equal'>
                      <Form.Field require>
                        <label>A cuáles cargos te gustaría optar</label>
                      </Form.Field>  
                      <Form.Field>
                        <Form.Field
                          control={Checkbox} 
                          label='Desarrollador Full Stack'
                          name='job[]'
                          value='Desarrollador Full Stack'
                          options={jobOptions}
                          onChange={(_, data)=> values.idealJob.push(data.value)}
                          />
                        <Form.Field 
                          control={Checkbox} 
                          label='Desarrollador/a Back End'
                          name='jobs'
                          value='Desarrollador/a Back End'
                          options={jobOptions}
                          onChange={(_, data)=> values.idealJob.push(data.value)}
                         />
                        <Form.Field 
                          control={Checkbox} 
                          label='Desarrollador/a Front End'
                          name='jobs[]'
                          value='Desarrollador/a Front End'
                          options={jobOptions}
                          onChange={(_, data)=> values.idealJob.push(data.value)}
                       />
                      </Form.Field> 
                      <Form.Field>
                        <Form.Field 
                          control={Checkbox} 
                          label='Diseñador/a UX / UX Research o UI'
                          name='jobs[]'
                          value='Diseñador/a UX / UX Research o UI'
                          options={jobOptions}
                          onChange={(_, data)=> values.idealJob.push(data.value)}
                          />
                        <Form.Field 
                          control={Checkbox} 
                          label='Desarrollador/a Móvil'
                          name='jobs[]'
                          value='Desarrollador Móvil'
                          options={jobOptions}
                          onChange={(_, data)=> values.idealJob.push(data.value)}
                          />         
                      </Form.Field>  
                      <Form.Field>
                        <Form.Field 
                          control={Checkbox} 
                          label='Data Scientist o especialista machine learning'
                          name='jobs[]'
                          value='Data Scientist o especialista machine learning'
                          options={jobOptions}
                          onChange={(_, data)=> values.idealJob.push(data.value)}
                          />
                        <Form.Field 
                          control={Checkbox} 
                          label='Ingeniería de Datos'
                          name='jobs[]'
                          value='Ingeniería de Datos'
                          options={jobOptions}
                          onChange={(_, data)=> values.idealJob.push(data.value)}
                          /> 
                      </Form.Field>
                     </Form.Group>
                  
                )}
                */
