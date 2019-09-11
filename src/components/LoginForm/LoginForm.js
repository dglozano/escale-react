import React from "react";
import "./LoginForm.css";
import logo from "../../assets/images/logo.svg";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };
  onFormSubmit = () => {};

  onInputChange = () => {};

  render() {
    return (
      <div className="ui middle aligned center aligned full-height grid">
        <div className="column login-form">
          <div className="ui medium form ">
            <div className="ui raised very padded left aligned segment">
              <img
                id="login-form-logo"
                className="ui centered tiny image header"
                src={logo}
                alt={"logo"}
              />
              <h2 className="ui center aligned header">
                Bienvenido a{" "}
                <b>
                  <i>Escale.</i>
                </b>
              </h2>

              <div className="ui tiny text field">
                <p className="">
                  Si es tu primera vez, busca en tu bandeja de entrada el mail
                  de bienvenida con la contraseña inicial.
                </p>
              </div>
              <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                  <div className="ui left icon large input">
                    <i className="envelope icon"></i>
                    <input
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onInputChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="ui left icon large input">
                    <i className="secondary lock icon"></i>
                    <input
                      placeholder="Contraseña"
                      name="password"
                      value={this.state.password}
                      onChange={this.onInputChange}
                    />
                  </div>
                </div>

                <div className="ui divider"></div>

                <button
                  className="ui primary fluid large submit button"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
