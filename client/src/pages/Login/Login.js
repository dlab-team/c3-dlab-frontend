/*
Descripción

Como usuario registrado

Quiero poder logearme a la aplicación

Para poder utilizar la aplicación


Criterios de aceptación

Se me debe presentar un formulario con inputs para email y password

Si el login falla, se me debe avisar con el mensaje “El usuario o contraseña ingresados no son correctos

Se debe verificar que el email sea un email

Al hacer login, se me debe redirigir a mi perfil

En la barra de navegación, el botón de login debe cambiar a “Mi perfil”, y el boton de “Registro” debe desaparecer
 */

import React from "react";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import "./Login.css";

import { Header, Button } from "semantic-ui-react";

const Login = () => {
  return (
    <div className="login-container">
      <Header as="h4">login Page Devsafio</Header>
      <br></br>
      <Title text="añade un titulo para el login" />
      <br></br>
      <Label text="Usuario" />
      <Input
        attribute={{
          id: "usuario",
          name: "usuario",
          type: "text",
          placeholder: "Ingrese su usuario",
        }}
      />
      <Label text="contraseña" />
      <Input
        attribute={{
          id: "contraseña",
          name: "contraseña",
          type: "password",
          placeholder: "Ingrese su contraseña",
        }}
      />
      <br></br>
      <Button>inicia sesion</Button>
      <br></br>
      <Button>cerrar sesion</Button>
    </div>
  );
};

export default Login;
