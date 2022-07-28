import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import {Image, Modal} from 'semantic-ui-react'

//avatar y nombre
export default function Name(props) {
 /* if (props.login == true){
    return
    <Modal></Modal>
  }*/
    const [NameUser, setListUser] = useState([])
    useEffect(()=>{
      const getUser= async () =>{
        const BaseURL="https://thronesapi.com/api/v2/Characters"
        const result = await axios.get(BaseURL)
        console.log(result.data)
        setListUser(result.data)
      }
      getUser()
    },[]) 
    
  return (
    <Fragment>
      {NameUser.map((usuario, i)=>{
        return(
          <Fragment>
            <h1 key={i}><Image src={usuario.imageUrl} avatar />Hola {usuario.fullName}!</h1>
          </Fragment>
        )
      })}
    </Fragment>
  )
}
