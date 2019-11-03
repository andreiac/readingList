import React, { Component } from "react";
import Search from "./containers/Search";
import Saved from "./containers/Saved";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header></Header>
        <Switch>

          <Route path="/Saved">
            <Saved />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
