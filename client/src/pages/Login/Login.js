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

import React, { useState } from "react";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import "./Login.css";

import { Header, Button } from "semantic-ui-react";

const Login = () => {

  const [ user, setUser ] = useState('');
  const [ password, setPassword] = useState('');
  const [passwordError, setPasswordError ] = useState(false);
  const [ isloging, setIsloging ] = useState(false);

  function handleChange(name, value) {
    if(name === 'usuario') {
      setUser(value)
      //Variable de almacenamiento
    } else {
      if(value.length < 8) {
        setPasswordError(true);

      } else {
        setPasswordError(false);
        setPassword(value)
      }
    }
  }

  //Funcion para validar contraseñas
  function ifMatch(param){
    if(param.user.length > 0 && param.password.length > 0) {
      if(param.user === 'Camilo' && param.password === '12345678') {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem('account', account);
        setIsloging(true);
      } else {
        setIsloging(false);
      }
    } else {
      setIsloging(false);
    }
  }

  //Funcion para el click del boton inicia sesión.
  function handleSubmit () {
    let account = { user, password}
    if (account) {
      ifMatch(account);
    }
  }

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
        handleChange = {handleChange}
      />
      <Label text="Contraseña" />
      <Input
        attribute={{
          id: "contraseña",
          name: "contraseña",
          type: "password",
          placeholder: "Ingrese su contraseña",
        }}
        handleChange = {handleChange}
        param={passwordError}
      />

        {passwordError && 
        <label className='label-error'>Contraseña invalida o incompleta</label>
        }

      <br></br>
      <Button className='iniciasesion' onClick={handleSubmit}>
        inicia sesion</Button>
      <br></br>
      <Button>cerrar sesion</Button>
    </div>
  );
};

export default Login;
