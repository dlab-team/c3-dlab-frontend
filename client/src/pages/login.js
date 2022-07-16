import React from "react";
import { Container, Header, Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "../Pages/Logos-devsafio/DEV IMAGOTIPO COLOR HORIZONTAL.png";
import "./pages/Login.css";

function Login() {
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
        .min(8, "La contraseña debe tener 8 caracteres minimo")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "la contraseña debe tener al menos una letra mayuscula, una minuscula, un numero y un caracter especial"
        ),
    }),

    onSubmit: (forminfo) => {
      console.log(forminfo);
    },
  });

  return (
    <div className="login-container">
      <div class="screen">
        <div class="screen__content">
          <Container className="containerlogin">
            <div class="login__field">
              <Form className="login" onSubmit={formik.handleSubmit}>
                <div className="image">
                <img src={Image} alt="logo" />
                </div>
                <Form.Input
                  type="email"
                  className="forminputemail"
                  name="email"
                  onChange={formik.handleChange}
                  error={formik.errors.emai}
                  value={formik.values.email}
                >
                  <label>Email </label>
                  <input placeholder="Email " className="login__input" 
                  />
                </Form.Input>
                <Form.Input
                  type="Password"
                  className="Form.Input.Password"
                  name="password"
                  onChange={formik.handleChange}
                  error={formik.errors.password}
                  value={formik.values.password}
                >
                  <label>Password </label>
                  <input placeholder="Password" 
                  className="login__input" 
                  />
                </Form.Input>
                <Button type="submit" className="login__submit">
                  Login
                </Button>
              </Form>
            </div>
          </Container>
          <div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>	
        </div>
      </div>
    </div>
  );
}

export default Login;
