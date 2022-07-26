import React from "react";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import DashboardNavbar from "../../components/profile/DashboardNavbar";
import DashboardStats from "./DashboardStats";
import UserAvatar from "../../components/profile/UserAvatar";
import BackToHomeBtn from "../../components/backToHomeBtn";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Grid celled="internally">
        <GridRow>
          <GridColumn width={3}>
            <DashboardNavbar />
          </GridColumn>
          <GridColumn width={13}>
            <UserAvatar />
            <DashboardStats />
          </GridColumn>
        </GridRow>
      </Grid>
      <NavLink to="/">
        <BackToHomeBtn />
      </NavLink>
    </div>
  );
};

export default Dashboard;
