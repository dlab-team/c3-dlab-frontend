import React from "react";
import { List, ListItem } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <>
      <List
        selection
        divided
        verticalAlign="right"
        size="huge"
        className="dashboard-nav-wrapper"
      >
        <NavLink to="/profile-form">
          <ListItem icon="user" content="Mi Perfil" />
        </NavLink>
        <NavLink to="/showthecode">
        <ListItem content="Show The Code"/>
        </NavLink>
        <ListItem icon="suitcase" content="Ofertas" />
        <ListItem icon="users" content="Networking" />
        <ListItem component={Link} to="/showthecode" icon="sign-out" content="Cerrar Sesión" />
      </List>
    </>
  );
};

export default DashboardNavbar;
