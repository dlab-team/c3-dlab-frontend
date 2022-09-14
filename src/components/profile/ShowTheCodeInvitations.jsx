import React from "react";
import { useContext } from "react";
import { Container,Button, Card} from 'semantic-ui-react'
import { DataContext } from "../../context/Context";


const ShowTheCode = () => {
      
      const {data} = useContext(DataContext)
  
      console.log(data.sort((a, b) => new Date(a.fecha).getTime() > new Date(b.fecha).getTime()));

      const changeTrue = (id) => {
        let index = data.findIndex(position => position.id === id)
        console.log("position is: ",index)
        data[index].status = true;
        console.log(data[index])
       }

       const changeFalse = (id) => {
        let index = data.findIndex(position => position.id === id)
        console.log("position is: ",index)
        data[index].status = false;
        console.log(data[index])
       }
     
    const card = data.map((data) =>

      <Card>
      <Card.Content>
      
        <Card.Header>{data.empresa}</Card.Header>
        <Card.Meta></Card.Meta>
        
        <Card.Description>
        <h6><strong>Cargo:</strong> {data.cargo}</h6>
        <br />
        <h6><strong>Habilidades:</strong> {data.conocimiento}</h6>
        <br />
        <h6><strong>Fecha:</strong> {data.fecha}</h6>
       
        <h6><strong>Hora:</strong> {data.hora}</h6>
        </Card.Description>
       
      
        <a href={data.paginaweb}>Pagina Web</a>      
      </Card.Content>

      <Card.Content extra>
        <div className='ui two buttons'>
          <Button key={data.id} onClick={() => {changeTrue(data.id)}} basic color='green'>
            Aceptar
          </Button>
          <Button  key={data.id} onClick={() => {changeFalse(data.id)}} basic color='red'>
            Rechazar
          </Button>
        </div>
      </Card.Content>
    </Card>
    );
    

    return (
        <Container>
        <Container textAlign='center'> <h1> Show The Code</h1>  <h4 textAlign='center'> Invitaciones </h4> </Container>
        <br/>
          <Card.Group>
           {card}
          </Card.Group>
        </Container>
    )
  
}
export default ShowTheCode; 


