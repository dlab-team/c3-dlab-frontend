import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import "./signup.css"

const Signup = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	return (
		<>
			<Formik
				initialValues={{
					correo: '',
                    password:'',
                    confirmPassword:'',
				}}
				
                validationSchema={Yup.object().shape({            
                    correo: Yup.string()
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

				onSubmit={(valores, {resetForm}) => {
					resetForm();
                      axios.post('http://localhost:8080/api/1/users/signup/', {
                      correo: valores.correo,
                      password: valores.password,
                      })
                      .then(function (response) {
                        console.log("respuesta ok",response);
                      })
                      .catch(function (error) {
                        console.log("error, no funcionó",error);
                      });

					console.log('Formulario enviado');
                    console.log(valores) 
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 4000);
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
                        <h1>Registro</h1>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="Correo" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <Field  
                                type="password"
                                id='password' 
                                name='password' 
                                placeholder="Contraseña" 
                                /> 
                            <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
						</div>

                        <div>
                            <label htmlFor="confirmPassword"> Confirmar Contraseña</label>
                            <Field  
                                type="password"
                                id='confirmPassword' 
                                name='confirmPassword' 
                                placeholder="Confirmar Contraseña" 
                                /> 
                            <ErrorMessage name="password" component={() => (<div className="error">{errors.confirmPassword}</div>)} />
						</div>


						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}


			</Formik>
		</>
	);
}
 
export default Signup;