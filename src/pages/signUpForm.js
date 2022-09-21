import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Navbar from "../components/navbar";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/api";

const SignUpForm = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [errorRegistro, setErrorRegistro] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Formik
        initialValues={{
          correo: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          correo: Yup.string()
            .email("Correo no valido")
            .min(3, "Faltan caracteres")
            .required("Por favor, ingresa un correo electrónico válido"),

          password: Yup.string()
            .equals(
              [Yup.ref("confirmPassword"), null],
              "las contraseñas no son iguales"
            )
            .min(8, "La clave debe contener más de 8 caractes")
            .required("Por favor ingrese una contraseña"),

          confirmPassword: Yup.string()
            .equals(
              [Yup.ref("password"), null],
              "las contraseñas no son iguales"
            )
            .min(8, "La clave debe contener más de 8 caractes")
            .required("Por favor ingrese la confirmación de la contraseña"),
        })}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          axios
            .post(`${BASE_URL}/api/1/users/signup/`, {
              email: valores.correo,
              password: valores.password,
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
          console.log(valores);
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <h2 className="signup-greeting">Bienvenid@ a DEVsafio!</h2>
            <div>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="Correo"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
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

            <div>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <div className="error">{errors.confirmPassword}</div>
                )}
              />
            </div>

            <Button primary type="submit" className="signup-btn">
              Registrarte
            </Button>
            {formularioEnviado && (
              <div class="ui success message">
                {" "}
                <i class="close icon"></i>
                <div className="header">Tu registro fue exitoso.</div>
              </div>
            )}
            <div className="signup-terms">
              Al registrarte, aceptas nuestras <strong>Condiciones</strong>, la{" "}
              <strong>Política de datos </strong> y la{" "}
              <strong>Política de cookies.</strong>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
