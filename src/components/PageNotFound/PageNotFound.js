import React from "react";
import { Container, Image, Header, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import notFoundImage from "../../assets/images/404.svg";

export default () => (
  <Container text className="container-padding">
    <Grid columns={1} verticalAlign="middle" centered>
      <Grid.Column centered textAlign="center">
        <Image src={notFoundImage} alt="404" centered size="small" />
        <Header as="h3">
          Ups, te has perdido?
          <Header.Subheader>
            No pudimos encontrar la página a la que querías acceder. Verifica el
            link o vuelve a la página principal.
          </Header.Subheader>
        </Header>
        <Button
          secondary
          as={Link}
          to="/"
          content="Volver a Escale"
          size="huge"
        />
      </Grid.Column>
    </Grid>
  </Container>
);
