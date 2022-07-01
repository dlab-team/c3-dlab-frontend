import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = (props) => {

    const {email, password,confirmPassword,onSubmitProp} = props;

    return (
        <div >
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
            .equals([Yup.ref('confirmPassword'), null], "las contraseñas no son iguales")
            .min(8, "La clave debe contener más de 8 caractes")
            .required("Por favor ingrese una contraseña"),

            confirmPassword: Yup.string()
            .equals([Yup.ref('password'), null], "las contraseñas no son iguales")
            .min(8, "La clave debe contener más de 8 caractes")
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
            <div>
                <Form method= "post" onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo Electrónico</label>
                    <Field id='email' type="text" placeholder="Email" name='email'/>
                    <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>

                    <label htmlFor="password">Contraseña</label>
                    <Field  id='password' type="password" placeholder="Contraseña" name='password'/>
                    {errors.password && touched.password && <p>{errors.password}</p>}

                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <Field  id='confirmPassword' type="password" placeholder="Confirmar Contraseña" name='confirmPassword'/>
                    {errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}
                    <br></br>
                    <button type="submit" disabled={Object.values(errors).length > 0}>Registrarse</button>
                </Form>
                </div>
        );
        }}
        </Formik>
        </div>
    );
}

export default Register;
