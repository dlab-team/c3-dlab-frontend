import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { replace, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../assets/styles.css";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      // initial values for the form
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string() // validation for the email field
        .email("Mail invalido")
        .required("El email es requerido"),
      password: Yup.string() // validation for the password field
        .required("La contraseña es requerida")
        .min(8, "La contraseña debe tener 8 caracteres minimo"),
      /* .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "la contraseña debe tener al menos una letra mayuscula, una minuscula, un numero y un caracter especial"
        ), */
    }),

    onSubmit: (forminfo, { resetForm }) => {
      resetForm();
      axios
        .post("http://localhost:8080/api/1/users/signin/", {
          email: forminfo.email,
          password: forminfo.password,
        })
        .then(function (response) {
          if (response.data.success === true) {
            navigate("/dashboard", { replace: true });
          }
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
      console.log("Formulario enviado");
      console.log(forminfo);
      cambiarFormularioEnviado(true);
      setTimeout(() => cambiarFormularioEnviado(false), 5000);
    },
  });

  return (
    <>
      <Navbar />
      <div className="login-container">
        <Form className="formulario" onSubmit={formik.handleSubmit}>
          <h2 className="login-greeting">Ingresa</h2>
          <div>
            <Form.Input
              placeholder="Correo"
              type="email"
              className="forminputemail"
              name="email"
              onChange={formik.handleChange}
              error={formik.errors.emai}
              value={formik.values.email}
            ></Form.Input>
          </div>

          <Form.Input
            placeholder="Contraseña"
            type="Password"
            className="Form.Input.Password"
            name="password"
            onChange={formik.handleChange}
            error={formik.errors.password}
            value={formik.values.password}
          ></Form.Input>
          <Button primary type="submit" className="login-btn">
            Iniciar Sesión
          </Button>
          <Link to="/profile-form">
            <Button color="teal" style={{ marginTop: "40px" }}>
              Link Temporal a Dashboard-Profile
            </Button>
          </Link>
          <Link to="/profile-form-container">
            <Button color="teal" style={{ marginTop: "40px" }}>
              Link Temporal Profile Check boxes
            </Button>
          </Link>
        </Form>
      </div>
    </>
  );
}

export default Login;
