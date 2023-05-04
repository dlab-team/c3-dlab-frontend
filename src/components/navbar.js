import React, { useContext } from "react";
import { Menu, Button, Image, MenuItem, Container } from "semantic-ui-react";
import logo from "../assets/img/DEV LOGOTIPO WHITE.png";
import "../assets/styles.css";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../contexts/userContext";

const Navbar = () => {
  const userCtx = useContext(UserContext)
  const { userData } = userCtx

  return (
    <div className="navbar-wrapper">
      <Menu className="navbar-menu" stackable inverted secondary size="huge">
        <Container className="navbar-menu-items">
          <Link to="/">
            <MenuItem position="left">
              <Image src={logo} size="small" />
            </MenuItem>
          </Link>
          <NavLink to="/about">
            <MenuItem as="a" active>
              Sobre Devsafio{" "}
            </MenuItem>
          </NavLink>
          <NavLink to="/profileType">
            <MenuItem as="a">Perfiles</MenuItem>
          </NavLink>
          <NavLink to="/blog">
            <MenuItem as="a">Blog</MenuItem>
          </NavLink>
          {
            userData ?
              <NavLink to='/dashboard'>
                <Button>Mi perfil</Button>
              </NavLink>
              :
          <MenuItem position="right">
            <NavLink to="/signup-form">
              <Button as="a" inverted>
                Regístrate
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button as="a" inverted primary style={{ marginLeft: "0.5em" }}>
                Ingresa
              </Button>
            </NavLink>
          </MenuItem>
          }
        </Container>
      </Menu>
    </div>

  );
};

export default Navbar;
