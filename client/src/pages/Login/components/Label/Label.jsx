import React from "react";
import "./Label.css"

const Label = ({text}) =>{
    
    return (
        <div className='label-container'>
            <label className='label-label'> {text} </label>
        </div>
    )
};
export default Label;