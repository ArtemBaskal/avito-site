import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import FavoritesPage from "../Pages/FavoritesPage";
import MainPage from "../Pages/MainPage";

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/favorites" exact component={FavoritesPage} />
    </Switch>
  </Router>
);

export default App;
