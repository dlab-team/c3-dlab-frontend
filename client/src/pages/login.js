import React from "react";
import {Container, Header, Form, Button} from "semantic-ui-react";
import {useFormik} from "formik";
import * as Yup from "yup";
import '../Pages/Login.css'


function Login() {

    const formik = useFormik({
        initialValues: {    // initial values for the form
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string() // validation for the email field
                .email("Mail invalido")
                .required("El email es requerido"),
            password: Yup.string() // validation for the password field 
                .required("La contraseña es requerida")
                .min(8, "La contraseña debe tener 8 caracteres minimo")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "la contraseña debe tener al menos una letra mayuscula, una minuscula, un numero y un caracter especial")
        }),

        onSubmit: (forminfo) => {
            console.log(forminfo);
        }
    }); 



  return (
    <div className="login-container">
    <Container className ="Container.Login">
     <image src= {require('../pages/Logos-devsafio')} alt="logo" className="logo"/>
    <Header as="h4">login Page Devsafio</Header>
      <Form className="Form.Login" onSubmit={formik.handleSubmit} >
        <Form.Input type="email" className="Form.Input.Email" name="email" onChange={formik.handleChange} error={formik.errors.emai} value= {formik.values.email}  >
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Input>
        <Form.Input type="Password" className="Form.Input.Password" name="password" onChange={formik.handleChange} error={formik.errors.password} value= {formik.values.password}>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Input>
        <Button type="submit" className="Form.Button.Login">Login</Button>
      </Form>
    </Container>
    </div>
  );
}

export default Login;
