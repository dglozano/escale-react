import React from "react";
import PropTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import { client } from "../../apiClient.js";
import "./LoginForm.css";
import {
  Form,
  Grid,
  Message,
  Header,
  Segment,
  Responsive
} from "semantic-ui-react";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    emailError: false,
    passwordError: false,
    loginError: false,
    _loading: false,
    _gridWidth: {}
  };

  handleOnGridWidthChange = (e, { width }) =>
    this.setState({ _gridWidth: width });

  handleOnChange = (e, { name, value }) => this.setState({ [name]: value });

  handleOnSubmit = e => {
    const { email, password } = this.state;

    if (this.validateInput(email, password)) {
      this.login(email, password);
    }
  };

  login = (email, password) => {
    this.setState({ _loading: true });

    client
      .sendLoginCredentials(email, password)
      .then(this.onLoginSuccess)
      .catch(this.showLoginError)
      .finally(() => this.setState({ _loading: false }));
  };

  onLoginSuccess = response => {
    this.setState({
      loginError: false
    });
    this.props.onLoginSuccess(response);
  };

  showLoginError = error => {
    let errorString = "Undefined error.";
    if (!!error.response) {
      switch (error.response.status) {
        case 401:
          errorString = "Las credenciales ingresadas son incorrectas.";
          break;
        default:
          errorString =
            "No pudimos contactarnos con el servidor. Intenta de nuevo más tarde.";
      }
    }
    this.setState({
      loginError: errorString
    });
  };

  validateInput = (email, password) => {
    const validEmail = this.validateEmail(email);
    const validPassword = this.validatePassword(password);
    return validEmail && validPassword;
  };

  validateEmail = email => {
    const isValid = isEmail(email);
    this.setState({ emailError: isValid ? false : "Ingresa un email válido" });
    return isValid;
  };

  validatePassword = password => {
    const isValid = this.isPassword(password);
    this.setState({ passwordError: isValid ? false : "Ingresa tu contraseña" });
    return isValid;
  };

  isPassword = password => {
    return !!password && 0 !== password.length;
  };

  render() {
    const gridWitdh = this.state._gridWidth;
    const tabletBreakpoint = 600;
    const isNarrowerThanTablet = gridWitdh <= tabletBreakpoint;
    const isNarrowerThanComputer =
      gridWitdh <= Responsive.onlyComputer.minWidth;

    return (
      <Responsive
        id="login-grid"
        as={Grid}
        verticalAlign="middle"
        centered
        columns={1}
        fireOnMount
        onUpdate={this.handleOnGridWidthChange}
      >
        <Grid.Row>
          <Header
            id="login-header"
            inverted
            as={isNarrowerThanComputer ? "h3" : "h2"}
          >
            Iniciar Sesión
            <Header.Subheader>
              Si es tu primera vez, en el mail de bienvenida encontrarás la
              contraseña inicial.
            </Header.Subheader>
          </Header>
        </Grid.Row>
        <Grid.Column textAlign="center">
          <Segment
            loading={this.state._loading}
            id="login-segment"
            textAlign="left"
            raised
            padded="very"
          >
            <Form size="large" onSubmit={this.handleOnSubmit}>
              <Form.Input
                fluid
                icon="at"
                iconPosition="left"
                label="Email"
                placeholder="juanperez@escale.com.ar"
                name="email"
                error={this.state.emailError}
                onChange={this.handleOnChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="**********"
                label="Contraseña"
                type="password"
                name="password"
                error={this.state.passwordError}
                onChange={this.handleOnChange}
              />

              <Form.Field>
                <a href="/">¿Olvidaste tu contraseña?</a>
              </Form.Field>

              <Message
                error
                visible={!!this.state.loginError}
                onDismiss={() => this.setState({ loginError: false })}
                header="Ups!"
                content={this.state.loginError}
              />

              <Form.Button
                fluid={isNarrowerThanTablet}
                primary
                size="large"
                content="Iniciar Sesión"
              />
            </Form>
          </Segment>
        </Grid.Column>
      </Responsive>
    );
  }
}

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func
};

export default LoginForm;
