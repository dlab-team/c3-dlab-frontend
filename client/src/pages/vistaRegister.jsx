import React from 'react';
import Register from '../components/Register';

const VistaRegister = () => {


    const registerUser = (values) =>{
        console.log("registro usuario")
        console.log(values)
    }



    return (

        <div>
            <div>
                <div>
                    <h2>Registro de Usuario</h2>
                    <Register onSubmitProps={registerUser} email='' password='' confirmPassword='' ></Register>
                </div>
            </div>
        </div>
    );
}

export default VistaRegister;
