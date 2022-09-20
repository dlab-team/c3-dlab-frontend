import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { Container, Card, Image, Form, TextArea, Input} from 'semantic-ui-react'

 
const ShowTheCodeAccept = () => {

  const {data} = useContext(DataContext)

  const datatrue = data.filter(item => item.status) /// Filtro todos los que tengan el status en true 

    const card = datatrue.map((data) =>
      
      <Card>
      <Card.Content>
        <Image
          floated='right'
          size='medium'
        />
        <Card.Header>{data.empresa}</Card.Header>
        
        <Card.Description>
          <h6><strong>Cargo:</strong> {data.cargo}</h6>
          <br />
          <h6><strong>Habilidades:</strong> {data.conocimiento}</h6>
          <br />
          <h6><strong>Fecha:</strong> {data.fecha}</h6>
        
          <h6><strong>Hora:</strong> {data.hora}</h6>
        </Card.Description>
       
        <a href={data.paginaweb}>Pagina Web</a>  
        <br />

        <Form>
          <h6><strong>Proyecto:</strong></h6>
          <Form.Field>
          <Input placeholder='First name' />  
          </Form.Field>
          <TextArea rows={2} placeholder='Tell us more' />
        </Form>
      </Card.Content>

    
    </Card>
    );
    

    return (
        <Container>
         <Container textAlign='center'> <h1> Show The Code</h1>  <h4 textAlign='center'> Aceptados </h4> </Container>
        <br/>
          <Card.Group>
           {card}
          </Card.Group>
        </Container>
    )
  
}
export default ShowTheCodeAccept; 


