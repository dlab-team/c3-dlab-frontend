import React from "react";
import { Grid, GridRow, GridColumn, Card } from "semantic-ui-react";
import DashboardNavbar from "../../components/profile/DashboardNavbar";
import BackToHomeBtn from "../../components/backToHomeBtn";
import { NavLink } from "react-router-dom";


 
const ShowTheCode = () => {
return (
  <div className="dashboard-wrapper">
  <Grid celled="internally">
    <GridRow>
      <GridColumn width={3}>
        <DashboardNavbar />
      </GridColumn>
      <GridColumn width={13}>
      <h2>Bienvenido a Show The Code</h2>
      <Card
       href='/dashboard/showthecode/invitations'
       header='Show the Code'
       meta='Invitations'
       description='Aca se verán todas las invitaciones a show the code'
      />
        <Card
       href='/dashboard/showthecode/accepted'
       header='Show the Code'
       meta='accepted'
       description='Aca se verán toda los Show The Code Aceptados '
      />
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


