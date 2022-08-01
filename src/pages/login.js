import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Navbar from "../components/navbar";
import { Button } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  //   const [errorRegistro, setErrorRegistro] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Correo no valido")
            .min(3, "Faltan caracteres")
            .required("Por favor, ingresa un correo electrónico válido"),

          password: Yup.string()
            .min(8, "La clave debe contener al menos 8 caracteres")
            .required("Por favor ingrese una contraseña"),
        })}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          axios
            .post("http://localhost:8080/api/1/users/signin/", {
              email: values.email,
              password: values.password,
            })
            .then(function (response) {
              if (response.data.success === true) {
                console.log("ok", response.data);
                cambiarFormularioEnviado(true);
                setTimeout(() => cambiarFormularioEnviado(false), 2000);
                resetForm();
                setTimeout(
                  () => navigate("/dashboard", { replace: true }),
                  2000
                );
              }
            })
            .catch(function (error) {
              alert(error.response.data.message);
              console.log("error login:", error.response.data.message);
            });
          console.log("Valores onSubmit", values);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <h2 className="login-greeting">Ingresa</h2>
            <div>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Correo"
                autoComplete="off"
              />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
            </div>

            <div>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
              />
              <ErrorMessage
                name="password"
                component={() => <div className="error">{errors.password}</div>}
              />
            </div>

            <Button primary type="submit" className="login-btn">
              Iniciar Sesión
            </Button>
            <Link to="/dashboard">
              <Button color="teal" style={{ marginTop: "40px" }}>
                Link Temporal a Dashboard-Profile
              </Button>
            </Link>
            {formularioEnviado && (
              <div class="ui success message">
                {" "}
                <i class="close icon"></i>
                <div className="header">Tu ingreso fue exitoso.</div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
