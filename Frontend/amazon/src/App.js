import React from "react";
import Header from "./Components/Header";
import Home from "./routes/Home";
import { Router, Switch, Route } from "react-router-dom";
import Cart from "./routes/Cart";
import Login from "./routes/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ProductPage from "./routes/ProductPage";
import Catalog from "./routes/Catalog";
import history from "./helpers/history";
import ScrollToTopOnPathChange from "./Components/ScrollToTopOnPathChange";
import About from "./routes/About";
import Project from "./routes/Project";
//import AuthContextProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <Router history={history}>
      <ScrollToTopOnPathChange />
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/catalog/:one/:two" component={Catalog} />
          <Route path="/product/:id" component={ProductPage} />
          <PrivateRoute path="/myaccount" component={Header} />
          <Route path="/cart" component={Cart} />
          <Route path="/project" component={Project} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
