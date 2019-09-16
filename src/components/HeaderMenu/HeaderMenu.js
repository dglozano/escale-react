import React from "react";
import "./HeaderMenu.css";
import logo from "../../assets/images/logo.svg";
import { Container, Image, Menu, Header, Button } from "semantic-ui-react";

export default () => (
  <Menu id="header-menu" inverted borderless fixed="top">
    <Container>
      <Menu.Item as={Button}>
        <div id="menu-logo">
          <Image size="mini" src={logo} alt="logo" />
          <Header inverted as="h4">
            Escale
          </Header>
        </div>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="login">
          <Button basic inverted>
            Iniciar Sesión
          </Button>{" "}
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
