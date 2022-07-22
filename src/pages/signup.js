import React from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Message} from 'semantic-ui-react'
import "./signup.css"
// import axios from 'axios';



/* const CallTo = (email,password) => {
    state = {
        email: email,
        password:password,
      }

      handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name,
          correo:this.state.correo
        };
    
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
      
}  */


const Signup = (props) => {

    const {email, password,confirmPassword,onSubmitProp} = props;  /// esto lo recibo de algun lado o lo dejamos como props para que alguien los obtenga desde aca

    return (
          <Formik

        onSubmit={(values, {setSubmitting,}) =>{
            const timeOut = setTimeout(( )=>{
                console.log(values);
                onSubmitProp(values);
                setSubmitting(false);
                clearTimeout(timeOut);
                console.log("pruebaonSubmit")
            }, 1000);
        }}
          
        initialValues={{ email:email, password:password,confirmPassword:confirmPassword,}}

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
        })}>


        {({ values,errors,touched,valid,handleSubmit}) =>{

    

        return (
            <div>
                <h1>Registro</h1>

             
             <div className='container'>
             <form className='ui form' Method="post" onSubmit={handleSubmit}>
                  <div className='field'>
                    <label className="registertext" htmlFor="email">Correo Electrónico</label>
                    <Field id='email' type="text" placeholder="Email" name='email'/>
                    <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>
                    </div>
                    
                    <div className='field'>
                    <label className="registertext" htmlFor="password">Contraseña</label>
                    <Field  id='password' type="password" placeholder="Contraseña" name='password'/>
                    {errors.password && touched.password && <p>{errors.password}</p>}
                    </div>


                    <div className='field'>
                    <label className="registertext" htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <Field  id='confirmPassword' type="password" placeholder="Confirmar Contraseña" name='confirmPassword'/>
                    {errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}
                    </div>
                                
                    <Message success header='Form Completed'content="You're all signed up for the newsletter"/>
                </form>

                <button type="submit" disabled={Object.values(errors).length > 0} className="ui blue button">
                    Registrarse
                </button>
             </div>
                 

                     


            </div>
        );
        }}
        </Formik>
       
    );
}

export default Signup;