import React from "react";
import { Menu, Icon, IconGroup, Button, Image } from "semantic-ui-react";
import logo from "../assets/img/DEV ISOTIPO WHITE.png";
import "../assets/styles.css";

const navbar = () => {
  return (
    <Menu
      secondary
      inverted
      stackable
      style={{ backgroundColor: "#4060ab", color: "white", margin: "20px" }}
      widths={10}
      size="huge"
    >
      <Menu.Item>
        <Image alt="logo" size="mini" src={logo} />
      </Menu.Item>

      <Menu.Item name="devsafio">Sobre Devsafio</Menu.Item>

      <Menu.Item name="profiles">Contrata Talento TI</Menu.Item>

      <Menu.Item name="blog">Educación</Menu.Item>
      <Menu.Item name="signup" position="right">
        Regístrate
      </Menu.Item>
      <Menu.Item name="login">
        <Button style={{ color: "blue", borderRadius: "35px" }}>
          Ingresa
          <IconGroup style={{ margin: "none " }}>
            <Icon name="circle" size="big" color="green" /> <Icon name="user" />
          </IconGroup>
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default navbar;
