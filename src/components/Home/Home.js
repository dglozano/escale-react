import React from "react";
import PropTypes from "prop-types";
import "./Home.css";
import {
  Header,
  Segment,
  Icon,
  Button,
  Container,
  Grid,
  Responsive
} from "semantic-ui-react";
import { HashLink } from "react-router-hash-link";

class Home extends React.Component {
  render() {
    const isNarrowerThanTablet =
      this.props._screenWidth < Responsive.onlyTablet.minWidth;

    console.log(isNarrowerThanTablet + " " + this.props._screenWidth);
    return (
      <Container fluid>
        <Segment id="home-landing-segment">
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
                    comunicarte con el médico a través del chat de la
                    aplicación.
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
                  to="/#home-escale-details-segment"
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
        <Segment
          style={{ height: "50vh", backgroundColor: "black" }}
          id="home-escale-details-segment"
        ></Segment>
        <Segment style={{ height: "50vh" }}>
          <Grid columns={1}></Grid>
        </Segment>
      </Container>
    );
  }
}

Home.propTypes = {
  _screenWidth: PropTypes.number
};

export default Home;
