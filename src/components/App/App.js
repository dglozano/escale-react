import React, { Fragment } from "react";
import "./App.css";
import LoginForm from "../LoginForm/LoginForm";
import { Container } from "semantic-ui-react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

function App() {
  return (
    <Fragment>
      <div id="flex-wrapper">
        <Menu />
        <div id="flex-content-wrapper">
          <Container>
            <LoginForm />
          </Container>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
