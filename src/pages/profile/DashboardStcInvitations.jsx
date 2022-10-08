import React from "react";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import DashboardNavbar from "../../components/profile/DashboardNavbar";
import BackToHomeBtn from "../../components/backToHomeBtn";
import { NavLink } from "react-router-dom";
import ShowTheCodeInvitations from "../../components/profile/ShowTheCodeInvitations";

const DashboardStcInvitations = () => {
  return (
    <div className="dashboard-wrapper">
      <Grid celled="internally">
        <GridRow>
          <GridColumn width={3}>
            <DashboardNavbar />
          </GridColumn>
          <GridColumn width={13}>
            <ShowTheCodeInvitations/>
          </GridColumn>
        </GridRow>
      </Grid>
      <NavLink to="/">
        <BackToHomeBtn />
      </NavLink>
    </div>
  );
};

export default DashboardStcInvitations;
