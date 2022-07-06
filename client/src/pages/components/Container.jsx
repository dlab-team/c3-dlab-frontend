import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Target = (props) => (
  <Card.Group>
    <Card>
      <Card.Content style={{backgroundColor:"#2078dc"}}>
        <Card.Header style={{color:"white"}}><FontAwesomeIcon icon={props.icon} color="white"/> {props.titulo} </Card.Header>
        <Card.Header style={{color:"white"}}>
          {props.response}
        </Card.Header>
      </Card.Content>
      <Button basic color='blue'>Ver</Button>
    </Card>
  </Card.Group>
)

export default Target




/*icono title resultado
export default function Target(props) {
  console.log(props)
  const [targets] = useState([
  {icono:<FontAwesomeIcon icon={faHandsHolding} color="white"/>, titulo:"estado"},
  {icono:<FontAwesomeIcon icon={faPersonChalkboard} color="white"/>,titulo:"show the code"},
  {icono:<FontAwesomeIcon icon={faBook} color="white"/>,titulo:"test realizados"} ,
  {icono:<FontAwesomeIcon icon={faLayerGroup} color="white"/>, titulo:"Stack"}])

 // const icons = imgs.map((img)=> <FontAwesomeIcon icon={img}/>)
  return (
    <Fragment>
      {targets.map( (target, index)=> 
      (<Card style={{backgroundColor:"#2078dc"}} key={index}>
        <CardContent >
          <h4>{target.icono}</h4>
          <h2>{target.titulo}</h2>
          <Button>Ver</Button>
        </CardContent>

        </Card>))}
    </Fragment>
  )
}*/
