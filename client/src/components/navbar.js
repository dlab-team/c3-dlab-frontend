import React from "react";
import { Menu, Button, Image, MenuItem, Container } from "semantic-ui-react";
import logo from "../assets/img/DEV LOGOTIPO WHITE.png";
import "../assets/styles.css";

const Navbar = () => {
  return (
    <Menu stackable inverted secondary size="huge">
      <Container>
        <MenuItem position="left">
          <Image src={logo} size="small" />
        </MenuItem>
        <MenuItem as="a" active>
          Sobre Devsafio{" "}
        </MenuItem>
        <MenuItem as="a">Perfiles</MenuItem>
        <MenuItem as="a">Blog</MenuItem>
        <MenuItem position="right">
          <Button as="a" inverted>
            Regístrate
          </Button>
          <Button as="a" inverted primary style={{ marginLeft: "0.5em" }}>
            Ingresa
          </Button>
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default Navbar;
