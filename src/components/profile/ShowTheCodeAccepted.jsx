import React from "react";
import { Container, Card, Image, Form, TextArea, Input} from 'semantic-ui-react'

const data = [
  {id:'101',status:false, empresa:'Entel', conocimiento:'Python, JavaScripts y React.js', cargo:'Desarrollador Full Stack Python + React.js ', paginaweb:'https://examedi.com/cl/', fecha:'2022-04-03', hora:'18:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
  {id:'102',status:true, empresa:'Entel 2', conocimiento:'Python, JavaScripts y react.js 2', cargo:'Desarrollador Full Stack Python + React.js 2', paginaweb:'https://examedi.com/cl/2', fecha:'2022-06-03', hora:'18:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
  {id:'103',status:false, empresa:'Entel 3', conocimiento:'Python, JavaScripts y react.js 3', cargo:'Desarrollador Full Stack Python + React.js 3', paginaweb:'https://examedi.com/cl/3', fecha:'2022-05-03', hora:'19:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
  {id:'104',status:true, empresa:'Entel 4', conocimiento:'Python, JavaScripts y react.js 4', cargo:'Desarrollador Full Stack Python + React.js 4', paginaweb:'https://examedi.com/cl/4', fecha:'2022-07-03', hora:'13:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' }
  ]

const datatrue = data.filter(item => item.status)
 
const ShowTheAccept = () => {

   
     
    const card = datatrue.map((data) =>

      <Card>
      <Card.Content>
        <Image
          floated='right'
          size='medium'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
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
export default ShowTheAccept; 


