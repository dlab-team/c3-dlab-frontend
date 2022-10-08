import React from "react";
import { useContext } from "react";
import { Container,Button, Card} from 'semantic-ui-react'
import { DataContext } from "../../context/Context";
import axios from "axios"; 

/* function stringToDate (fecha) {
  const convert = new Date(fecha)
  return (
    convert
  )
} */

const baseURL = "https://jsonplaceholder.typicode.com/posts";


function getMonthEasy (fecha) {
    const mes = new Date(fecha).getMonth()
    return (
      mes + 1
    )
}

function getDayEasy (fecha) {
  const day = new Date(fecha).getDate()
  return (
    day
  )
}


/* const datee = new Date('08-10-2022')
const mesD = datee.getMonth()
console.log("mes",mesD) */

   
const ShowTheCodeInvitations = () => {
      const {data} = useContext(DataContext)
      const [accepted, setAccepted] = React.useState()
      
      const orderedData = data.slice().sort((a,b) => a.fecha - b.fecha) // probando si ordena las fechas de mayor a menor
      console.log("ordenas:", orderedData)

      const changeTrue = (id) => {
        let index = data.findIndex(position => position.id === id)
        console.log("position is: ",index)
        data[index].status = true;
        setAccepted(true)
        console.log("setAccepted: ",accepted)
        
        axios
        .put(`${baseURL}/1`, {
          status: true,
        })
        .then((response) => {
          setAccepted(response.data);
        });
       }

       const changeFalse = (id) => {
        let index = data.findIndex(position => position.id === id)
        console.log("position is: ",index)
        data[index].status = false;
        setAccepted(false)
        console.log(("setAccepted: ",accepted))
       }

       
      /*  function updatePost() {
        axios
          .put(`${baseURL}/1`, {
            title: "Hello World!",
            body: "This is an updated post."
          })
          .then((response) => {
            setPost(response.data);
          });
      } */
    
  
     
    const card = data.map((data) =>
      <Card>
      <Card.Content>
        <Card.Header>{data.company}</Card.Header>
        <Card.Meta></Card.Meta>  
        <Card.Description>
        <h6><strong>Cargo:</strong> {data.type}</h6>
        <br />
        <h6><strong>Habilidades:</strong> {data.requirements}</h6>
        <br />
        <h6><strong>Fecha:</strong> {data.date} </h6>
        <h6> <strong> Mes {getMonthEasy(data.date)} </strong></h6> 
        <h6> <strong> Day {getDayEasy(data.date)} </strong></h6> 
        <h6><strong>Hora:</strong> {data.date}</h6>
        </Card.Description>   
        <strong><a href={data.web}>Pagina Web</a></strong>    
      </Card.Content>

      <Card.Content extra>
        <div className='ui two buttons'>
          <Button onClick={() => {changeTrue(data.id)}} basic color='green'>
            Aceptar
          </Button>
          <Button onClick={() => {changeFalse(data.id)}} basic color='red'>
            Rechazar
          </Button>
        </div>
      </Card.Content>
    </Card>
    );
    

    return (
        <Container>
        <Container textAlign='center'> <h1> Show The Code {data.fecha}</h1>  <h4 textAlign='center'> Invitaciones </h4> </Container>
        <br/>
          <Card.Group>
           {card}
          </Card.Group>
        </Container>
    )
  
}
export default ShowTheCodeInvitations; 


