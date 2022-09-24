import  React, {useEffect} from "react";
import { Grid, GridRow, GridColumn, Container } from "semantic-ui-react";
import DashboardNavbar from "../../components/profile/DashboardNavbar";
import BackToHomeBtn from "../../components/backToHomeBtn";
import { NavLink } from "react-router-dom";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import Target from "../../components/profile/Target";
import axios from 'axios'

 
const ShowTheCode = () => {

  const [datos, setDatos] = React.useState([])

  useEffect(() => {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
      })
        .then(function (response) {
            if (response.status === 200){
                const data = response.data
                console.log("data:",data)
                setDatos(data)
            }})
        .catch(function(error){
            console.log("error:", error)
        }) 
},[])


return (
  <div className="dashboard-wrapper">
  <Grid celled="internally">
    <GridRow>
      <GridColumn width={3}>
        <DashboardNavbar />
      </GridColumn>
      <GridColumn width={12}>
        <Container textAlign="center"> 
          <h2 >Bievenidos a la pantalla principal del Show The Code</h2>
          <br />
        </Container>
        <Container>
          <h5>A continuacion podras acceder a dos modulos del Show The Code.</h5>
          <br />
          <h5>Invitaciones: Verás todas las invitaciones que has recibido de parte de distintas empresas que hacen mach con tus habilidades.</h5>
          <br />
          <h5>Aceptadas:  Verás todas la invitaciones que has aceptado y en las que pronto tendrás que participar.</h5>
        </Container>
          <br />
          <br />
          <br />

          <ul>
            {datos.map(item => (
              <li key="item.id">{item.id} -{item.title} </li>
            ))}
          </ul>

        <Container>
            <Grid stackable columns={2}>
              <Grid.Column>
                <NavLink to="/dashboard/showthecode/invitations">
                  <Container>
                  <Target
                    icon={faCode}
                    titulo="Show The Code"
                    response="Invitaciones"
                  ></Target>
                  </Container>       
                    </NavLink>
              </Grid.Column>
              <Grid.Column>
                <NavLink to="/dashboard/showthecode/accepted">
                  <Container>
                  <Target
                    icon={faCode}
                    titulo="Show The Code"
                    response="Aceptadas"
                  ></Target>
                  </Container>    
                    </NavLink>
              </Grid.Column>
            </Grid> 
        </Container>
  
      </GridColumn>
    </GridRow>
  </Grid>
  <NavLink to="/">
    <BackToHomeBtn />
  </NavLink>
</div>
)
  
}




export default ShowTheCode; 



