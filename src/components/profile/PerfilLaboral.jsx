import React, { Fragment } from 'react'
import { Form, Header, Input,} from 'semantic-ui-react'
import Acordeon from './Acordeon'

export default function PerfilLaboral() {
  return (
    <Fragment>
        <Header as="h2">Perfil Laboral</Header>
        <p>
          Queremos conocer tus competencias y experiencia. A continuación podrás
          elegir las competencias que conoces con respecto a 3 niveles:
        </p>
        <p>
          <strong>Nivel 1: </strong>
          No tengo experiencia laboral, pero he desarrollado proyectos utilizado
          esta tecnología/herramienta.
        </p>
        <p>
          <strong>Nivel 2: </strong>
          Tengo poca experiencia laboral, menos de dos años, necesito
          supervisión constante.
        </p>
        <p>
          <strong>Nivel 3: </strong>
          Tengo experiencia laboral (+2 años) y/o autonomía completa a la hora
          de desarrollar proyectos. Ten en cuenta, de acuerdo a las competencias
          declaradas, te pediremos que seas capaz de demostrarlo de forma
          práctica durante el proceso de selección
        </p>
        <Form.Field>
          <Acordeon></Acordeon>
        </Form.Field>
        <Input label='Alguna otra tecnologìa que consideres importante agregar?' />
        <br />
    </Fragment>
  )
}
