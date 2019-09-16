import React, { Fragment } from "react";
import "./App.css";
import LoginForm from "../LoginForm/LoginForm";
import Footer from "../Footer/Footer";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";

class App extends React.Component {
  onLoginSuccess = response => {
    //TODO: implement login logic
    console.log(response);
  };

  render() {
    return (
      <Fragment>
        <div id="flex-wrapper">
          <HeaderMenu />
          <div id="flex-content-wrapper">
            <Switch>
              <Route path="/" exact component={() => <p>Holaa</p>} />
              <Route
                path="/login"
                component={LoginForm}
                onLoginSuccess={this.onLoginSuccess}
              />
              <Route component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
