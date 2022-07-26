import React from 'react'
import { Container, Form, Header} from 'semantic-ui-react'

export default function InfoPersonal() {
  return (
    <Container>
        <Header as='h2' style={{color:"white"}}>Información Personal</Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label htmlFor='name'>Nombre</label>
              <Form.Input
              type='text'
              id='name'
              placeholder='Name'
              onChange={(e)=> setForm(e.target.value)}
            />  
            </Form.Field>
            <Form.Field required>
              <label>Apellido</label>
              <Form.Input
              placeholder='Apellido'
              name='LastName'
            />
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label>Email</label>
              <Form.Input
              placeholder='Email'
            />
            </Form.Field>   
            <Form.Field required>
              <label>Número de teléfono Móvil</label>
              <Form.Input
              placeholder='Numero de teléfono'/>
            </Form.Field>               
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label>Ciudad</label>
            <Form.Input/>
            </Form.Field>
            <Form.Field required>
              <label>País/Región</label>
              <Form.Input/>
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
        </Form>
    </Container>
  )
}
