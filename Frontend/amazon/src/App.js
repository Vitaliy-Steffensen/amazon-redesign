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
import Project from "./routes/Project";
import Checkout from "./routes/Checkout";
//import AuthContextProvider from "./contexts/AuthContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderConfirmation from "./routes/OrderConfirmation";

const stripe = loadStripe(
  "pk_test_51HjOcIJXstuyXCSKOXYEGg0rDTCSYN8XtiQU0O3PEeBUlGHN6B01Hq9YcBL9SbzMSXAs6KGTcsFN3jNmO4XIO8hU00meVObCMF"
);

const App = () => {
  return (
    <Router history={history}>
      <ScrollToTopOnPathChange />
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/catalog/:one/:two" component={Catalog} />
          <Route path="/product/:id" component={ProductPage} />
          <PrivateRoute path="/myaccount" component={Header} />
          <Route path="/cart" component={Cart} />
          <Route path="/project" component={Project} />
          <Route path="/checkout">
            <Elements stripe={stripe}>
              <Checkout />
            </Elements>
          </Route>
          <Route path="/order-confirmation" component={OrderConfirmation} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
