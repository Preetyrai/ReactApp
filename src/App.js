import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
