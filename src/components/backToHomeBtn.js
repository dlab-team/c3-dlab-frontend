import React from "react";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const BackToHomeBtn = () => {
  return (
    <>
      <NavLink to="/">
        <Button
          floated="right"
          content="Ir a Página de Inicio"
          icon="right arrow"
          labelPosition="right"
          color="teal"
        />
      </NavLink>
    </>
  );
};

export default BackToHomeBtn;
