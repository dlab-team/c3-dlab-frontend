import React from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form, Message} from 'semantic-ui-react'
import "./register.css";



const Register = (props) => {

    const {email, password,confirmPassword,onSubmitProp} = props;

    return (
          <Formik
          initialValues={{
          email:email,
          password:password,
          confirmPassword:confirmPassword,
        }}
        validationSchema={Yup.object().shape({            
            email: Yup.string()
            .email("Correo no valido")
            .min(3, "Faltan caracteres")
            .required("Por favor, ingresa un correo electrónico válido"),
            
            password: Yup.string()
            .equals([Yup.ref('confirmPassword'), null], "Las contraseñas no son iguales")
            .min(8, "La clave debe contener más de 8 caracteres")
            .required("Por favor ingrese una contraseña"),

            confirmPassword: Yup.string()
            .equals([Yup.ref('password'), null], "Las contraseñas no son iguales")
            .min(8, "La clave debe contener más de 8 caracteres")
            .required("Por favor ingrese la confirmación de la contraseña"),
        })}

        onSubmit={(values, {setSubmitting}) =>{
            const timeOut = setTimeout(( )=>{
                console.log(values);
                onSubmitProp(values);
                setSubmitting(false);
                clearTimeout(timeOut);
            }, 1000);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                //isSubmitting,
                //validating,
                valid,
            }) =>{
        return (
            <div class="container">
                <h1>Registro</h1>
                <Form method= "post" onSubmit={handleSubmit}>
                    <label class="registertext" htmlFor="email">Correo Electrónico</label>
                    <Field id='email' type="text" placeholder="Email" name='email'/>
                    <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>

                    <label class="registertext" htmlFor="password">Contraseña</label>
                    <Field  id='password' type="password" placeholder="Contraseña" name='password'/>
                    {errors.password && touched.password && <p>{errors.password}</p>}

                    <label class="registertext" htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <Field  id='confirmPassword' type="password" placeholder="Confirmar Contraseña" name='confirmPassword'/>
                    {errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}
                    <br></br>
                    <article class="Button">
                    <Button type="submit" disabled={Object.values(errors).length > 0}>Registrarse</Button>
                    </article>
                    <Message success header='Form Completed'content="You're all signed up for the newsletter"/>
                </Form>
            </div>
        );
        }}
        </Formik>
       
    );
}

export default Register;