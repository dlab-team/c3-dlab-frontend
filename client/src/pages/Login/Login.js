/*
Descripción

Como email registrado

Quiero poder logearme a la aplicación

Para poder utilizar la aplicación


Criterios de aceptación

X -> Se me debe presentar un formulario con inputs para email y password

X -> Si el login falla, se me debe avisar con el mensaje “El email o contraseña ingresados no son correctos

X -> Se debe verificar que el email sea un email -- Falta implementarlo correctamente

X -> Al hacer login, se me debe redirigir a mi perfil -- Falta linkear la ruta

-> En la barra de navegación, el botón de login debe cambiar a “Mi perfil”, y el boton de “Registro” debe desaparecer
 */

import React, { useState } from "react";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import "./Login.css";

import { Header, Button } from "semantic-ui-react";

const Login = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState('');
  const [passwordError, setPasswordError ] = useState(false);
  const [ isloging, setIsloging ] = useState(false);
  const [ hasError, setHaserror ] = useState(false);

  function handleChange(name, value) {
    if(name === 'email') {
      setEmail(value)
      setHaserror(false);
      //Variable de almacenamiento
    } else {
      if(value.length < 8) {
        setPasswordError(true);
        setHaserror(false);

      } else {
        setPasswordError(false);
        setPassword(value)
        setHaserror(false);
      }
    }
  }

  //Funcion para validar contraseñas
  function ifMatch(param){
    if(param.email.length > 0 && param.password.length > 0) {
      if(param.email === 'Camilo' && param.password === '12345678') {
        const { email, password } = param;
        let ac = { email, password };
        let account = JSON.stringify(ac);
        localStorage.setItem('account', account);
        setIsloging(true);
      } else {
        setIsloging(false);
        setHaserror(true);
      }
    } else {
      setIsloging(false);
    }
  }

  //funcion para validar el email
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  //Funcion para el click del boton inicia sesión.
  function handleSubmit () {
    let account = { email, password}
    if (account) {
      ifMatch(account);
      validateEmail(email);
    }
  }

  return (
    <div className="login-container">
      <Header as="h4">login Page Devsafio</Header>
      { isloging ? 
      
       <a href="client\src\pages\profile.js"> </a> : null } 
      <Title text="Bienvenido" />
      <br></br>
      {
        hasError &&
      <label className='label-alert'> El email o contraseña ingresados no son correctos</label>
      }
      <Label text="Email" />
      <Input
        attribute={{
          id: "email",
          name: "email",
          type: "text",
          placeholder: "Ingrese su email",
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

    </div>
      
  );
};

export default Login;
