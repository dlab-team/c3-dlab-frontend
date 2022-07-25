import React from 'react'

export default function Active(props) {
  return (
    <h2>{props.activo ? "Activo" : "JobReady!"}{msje}</h2>
  )
}

Active.defaultProps = {
    activo:true,
    msje:"completa tu registro para estar JobReady"
};