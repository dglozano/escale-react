import React, { Fragment } from "react";
import "./App.css";
import LoginForm from "../LoginForm/LoginForm";
import { Container } from "semantic-ui-react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

class App extends React.Component {
  onLoginSuccess = response => {
    //TODO: implement login logic
    console.log(response);
  };

  render() {
    return (
      <Fragment>
        <div id="flex-wrapper">
          <Menu />
          <div id="flex-content-wrapper">
            <Container>
              <LoginForm onLoginSuccess={this.onLoginSuccess} />
            </Container>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
