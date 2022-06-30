/*
Descripción

Como usuario registrado

Quiero poder logearme a la aplicación

Para poder utilizar la aplicación

 "28:35"

Criterios de aceptación

Se me debe presentar un formulario con inputs para email y password

Si el login falla, se me debe avisar con el mensaje “El usuario o contraseña ingresados no son correctos

Se debe verificar que el email sea un email

Al hacer login, se me debe redirigir a mi perfil

En la barra de navegación, el botón de login debe cambiar a “Mi perfil”, y el boton de “Registro” debe desaparecer
 */

import React from "react";
import Title from './components/Title/Title'
import { Header, Button } from "semantic-ui-react";

const Login = () => {
  return (
    <div>
      <Header as="h1">login Page Devsafio</Header>
      <br></br>
      <Title text='soy el titulo'/>
      <br></br>
      <Button>inicia sesion</Button>
      <Button>cerrar sesion</Button>
     
      
    </div>
  );
};

export default Login;

