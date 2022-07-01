import React from 'react';
import './Input.css';

const Input = ({ attribute, handleChange, param }) => {
    return (
        <div>
            <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange= { (e) => handleChange (e.target.name, e.target.value)}
            //Si hay un error en la password, muestra un estilo en rojo, si no, muestra todo normal
            className= { param ? 'input-error' : 'regular-style'}
            />
        </div>
    )
};

export default Input;