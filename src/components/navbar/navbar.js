import React from "react"
import './navbar.css'
import {Link} from "react-router-dom"

const navbar = () => {
    return ( 
        <navbar>
            <div className="ui inverted segment blue">
                <div className="ui inverted secondary menu">
                    <Link  className="item" to="/home" > Home </Link> 
                    <Link  className="item" to="/profile"> Profile </Link> 
                    <Link  className="item" to="/signup" > Sign Up </Link> 
                </div>
            </div>
        </navbar>   
       
    )

}

export default navbar 