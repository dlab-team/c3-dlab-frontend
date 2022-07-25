import React from "react";
import { Card, CardDescription } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Target = (props) => (
  <>
    <Card className="user-stats-wrapper">
      <Card.Content>
        <FontAwesomeIcon icon={props.icon} color="white" />
        <CardDescription
          className="dashboard-stat-title"
          content={props.titulo}
        />
        <Card.Header
          as="h1"
          activo="activo"
          className="dashboard-stat"
          content={props.response}
        />
      </Card.Content>
    </Card>
  </>
);

export default Target;

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
