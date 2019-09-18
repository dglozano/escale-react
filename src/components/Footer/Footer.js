import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.svg";
import {
  Divider,
  Segment,
  Grid,
  List,
  Image,
  Header,
  Container,
  Icon
} from "semantic-ui-react";

export default () => (
  <Segment id="footer">
    <Container>
      <Grid stackable inverted>
        <Grid.Row>
          <Grid.Column width="3">
            <Image centered size="tiny" src={logo} alt="logo" />
          </Grid.Column>
          <Grid.Column width="3">
            <Header as="h5" inverted>
              Nosotros
            </Header>
            <List>
              <List.Item as="a">What is a FAQ?</List.Item>
              <List.Item as="a">Who is our user?</List.Item>
              <List.Item as="a">Where is our office located?</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width="3">
            <Header as="h5" inverted>
              Servicios
            </Header>
            <List>
              <List.Item as="a">What is a FAQ?</List.Item>
              <List.Item as="a">Who is our user?</List.Item>
              <List.Item as="a">Where is our office located?</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width="6">
            <Header as="h5" inverted>
              Conecta
            </Header>
            <List horizontal>
              <List.Item>
                <Icon link circular size="large" inverted name="facebook" />
              </List.Item>
              <List.Item>
                <Icon link circular size="large" inverted name="twitter" />
              </List.Item>
              <List.Item>
                <Icon link circular size="large" inverted name="instagram" />
              </List.Item>
              <List.Item>
                <Icon link circular size="large" inverted name="linkedin" />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column>
            <p>
              © Copyright {new Date().getFullYear()} Escale. Todos los derechos
              reservados.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);
