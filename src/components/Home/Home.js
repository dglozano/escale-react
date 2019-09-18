import React from "react";
import PropTypes from "prop-types";
import "./Home.css";
import {
  Header,
  Segment,
  Icon,
  Button,
  Placeholder,
  Container,
  Grid,
  Responsive
} from "semantic-ui-react";
import { HashLink } from "react-router-hash-link";

const Home = props => {
  const characteristicsId = "products-characteristics-section";

  return (
    <Container fluid>
      <Landing {...props} characteristicsId={characteristicsId} />
      <ProductCharacteristics characteristicsId={characteristicsId} />
      <ProductScreenshots />
    </Container>
  );
};

const Landing = props => {
  const isNarrowerThanTablet =
    props._screenWidth < Responsive.onlyTablet.minWidth;
  return (
    <Segment id="home-landing-section">
      <Container textAlign="left">
        <Grid verticalAlign="middle">
          <Grid.Column style={{ maxWidth: "715px" }}>
            <Header as={isNarrowerThanTablet ? "h3" : "h2"} inverted>
              Poniendo la tecnología a tu servicio, para que puedas alcanzar
              todos tus <i>objetivos</i>.
              <Header.Subheader>
                Escale es una plataforma telemedicina que da soporte a un
                innovador plan de dieta con monitoreo a distancia, que te
                permite medir tus datos de composición corporal desde la
                comodidad del hogar, ver estadísticas y pronósticos sobre tu
                evolución, obtener la dieta a realizar en tu teléfono y
                comunicarte con el médico a través del chat de la aplicación.
              </Header.Subheader>
            </Header>
            <Button
              animated="fade"
              as={HashLink}
              onMouseDown={e => e.preventDefault()}
              secondary
              scroll={el =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              to={"/#" + props.characteristicsId + "-anchor"}
              size={isNarrowerThanTablet ? "big" : "huge"}
            >
              <Button.Content visible>Conoce más</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

const ProductCharacteristics = props => (
  <Container id={props.characteristicsId}>
    <div
      id={props.characteristicsId + "-anchor"}
      style={{ position: "relative", top: "-125px", left: "0" }}
    />
    <Grid stackable centered relaxed columns="equal">
      <Grid.Column>
        <Segment padded>
          <Header as="h4" icon textAlign="center">
            <Icon name="doctor" circular />
            <Header.Content>Caracteristica 1</Header.Content>
          </Header>
          <Placeholder>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Header as="h4" icon textAlign="center">
            <Icon name="chart line" circular />
            <Header.Content>Caracteristica 1</Header.Content>
          </Header>
          <Placeholder>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Header as="h4" icon textAlign="center">
            <Icon name="chat" circular />
            <Header.Content>Caracteristica 3</Header.Content>
          </Header>
          <Placeholder>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </Grid.Column>
    </Grid>
  </Container>
);

const ProductScreenshots = () => (
  <Segment style={{ minHeight: "100vh", backgroundColor: "#011f2c" }}></Segment>
);

Home.propTypes = {
  _screenWidth: PropTypes.number
};

export default Home;
