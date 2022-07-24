import React, { useState } from 'react'
import Frameworks from './Frameworks'
import Herramientas  from './Herramientas'
import Lenguage from './Lenguage'
import { Form, Select, Checkbox, TextArea, Header, FormButton,} from 'semantic-ui-react'
import ExperienciaTrabajo from './ExperienciaTrabajo'

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
  {key:'ec', text:'en curso', value:'en curso'},

]
const EnglishOptions=[
  {key:'b', text:'básico', value:'basic'},
  {key:'m', text:'medio', value:'medio'},
  {key:'t', text:'técnico', value:'tecnico'},
  {key:'f', text:'fluido', value:'fluido'},

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

      <div style={{ backgroundColor: "#2078dc" }} >
        <Header as='h2' style={{color:"white"}}>Información Personal</Header>
        <Form >
          <Form.Group widths='equal'>
            <Form.Field required>
              <label htmlFor='name'>Nombre</label>
              <Form.Input
              type='text'
              id='name'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e)=> setName(e.target.value)}
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
                search
                searchInput={{ id: 'form-select-control-laboral' }}
              /> 
            </Form.Field>
          </Form.Group >
            <Header as='h2'style={{color:"white"}}>Perfil Laboral</Header>
            <p>
              Queremos conocer tus competencias y experiencia. 
              A continuación podrás elegir las competencias que conoces con respecto a 3 niveles:
            </p>
            <p> 
              <strong>Nivel 1: </strong> 
              No tengo experiencia laboral, pero he desarrollado proyectos utilizado esta tecnología/herramienta.
            </p>
            <p>  
              <strong>Nivel 2: </strong>
              Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante.
            </p>
            <p>
              <strong>Nivel 3: </strong>
              Tengo experiencia laboral (+2 años) y/o autonomía completa a la hora de desarrollar proyectos.
              Ten en cuenta, de acuerdo a las competencias declaradas, te pediremos que seas capaz de demostrarlo de forma práctica durante el proceso de selección
            </p>            
            <Form.Field>
              <label>Lenguaje nivel 1</label>
            </Form.Field>
            <Lenguage></Lenguage>
            <Form.Field>
              <label>Bases o frameworks nivel 1</label>
            </Form.Field>
            <Frameworks></Frameworks>
            <Form.Field>
              <label>Herramientas nivel 1</label>
            </Form.Field>
            <Herramientas></Herramientas>
            <Header as='h3'>Indícanos tus conocimientos a Nivel 2 (Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante):</Header>
            <Form.Field>
              <label>Lenguaje nivel 2</label>
            </Form.Field>
            <Lenguage></Lenguage>
            <Form.Field label='Bases o Frameworks nivel 2'>
            </Form.Field>
            <Frameworks></Frameworks>
            <Form.Field>
              <label>Herramientas nivel 2</label>
            </Form.Field>
            <Herramientas></Herramientas>
            <ExperienciaTrabajo></ExperienciaTrabajo>
            <Form.Button content='Enviar' primary/>
        </Form>
      </div>
    )
  }
