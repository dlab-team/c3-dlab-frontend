import React from 'react'
import { Form, Header } from 'semantic-ui-react'

export default function PerfilEducacional() {
  return (
    <div>
        <Form>
          <Header as='h2' style={{color:"white"}}>Perfil Educacional</Header>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Máximo nivel educacional</label>
              <Form.Field
                  control={Select}
                  options={EducacionalOptions}
                  placeholder='Seleccionar'
                  search
                  searchInput={{ id: 'form-select-control-select' }}
                />               
            </Form.Field>
            <Form.Field>
              <label>Nivel Inglés</label>
              <Form.Field
                control={Select}
                options={EnglishOptions}
                placeholder='Seleccionar'
                search
                searchInput={{ id: 'form-select-control-laboral' }}
              /> 
            </Form.Field>
          </Form.Group>
          <p>A continuación, carreras profesionales, cursos, bootcamp o certificaciones cursadas relacionadas al desarrollo de software, diseño o TI (puedes indicarnos las más importantes o actuales):</p>
          <Form.Group widths='equal'>
            <Form.Field required>
                <Form.Input
                  label='Nombre de la carrera, curso o bootcamp'
                  id='form-input-control'
                  control={TextArea}
                />
                <Form.Input
                  label='Nombre Institución'
                  id='form-input-control'
                  name=''
                />
                <Form.Input
                  label='Tipo Institución'
                  id=''
                  name='(Universidad, CFT, Academia'
                />
              <Form.Checkbox name='importante'></Form.Checkbox>
              <Form.Checkbox name='actual'></Form.Checkbox>
            </Form.Field>
            <Form.Button onClick={addIntitute}>Agregar Institución</Form.Button>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Situación educacional actual(Bootcamp)</label>
              <Form.Field
                control={Select}
                options={ActualOptions}
                placeholder='Seleccionar'
                multiple={true}
                value={ActualOptions}
                search
                searchInput={{ id: 'form-select-control-laboral' }}
              /> 
            </Form.Field>
          </Form.Group >

        </Form>
    </div>
  )
}
