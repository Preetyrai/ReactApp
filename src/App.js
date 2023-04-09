import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import Product from "./components/Product";
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Home,
  PrivateRoute,
  SingleProduct,
} from "./pages";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <AuthWrapper>
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>
        <Route exact path="/Cart">
          <Cart />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </AuthWrapper>
  );
}

export default App;
