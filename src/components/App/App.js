import React, { Fragment } from "react";
import "./App.css";
import LoginForm from "../LoginForm/LoginForm";
import Footer from "../Footer/Footer";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import Home from "../Home/Home";
import { Responsive } from "semantic-ui-react";

class App extends React.Component {
  state = {
    _screenWidth: 0
  };

  handleOnScreenWidthChange = (e, { width }) =>
    this.setState({ _screenWidth: width });

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
            <Responsive fireOnMount onUpdate={this.handleOnScreenWidthChange}>
              <Switch>
                <Route
                  path="/"
                  exact
                  component={props => (
                    <Home {...props} _screenWidth={this.state._screenWidth} />
                  )}
                />
                <Route
                  path="/login"
                  render={props => (
                    <LoginForm
                      {...props}
                      _screenWidth={this.state._screenWidth}
                    />
                  )}
                  onLoginSuccess={this.onLoginSuccess}
                />
                <Route component={PageNotFound} />
              </Switch>
            </Responsive>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
