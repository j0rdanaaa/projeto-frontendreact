import React from "react";
import Filters from "./components/Filters/Filters";
import Home from "./components/ProductList/Home/Home";
import Card from "./components/ShoppingCart/Cart/Cart";
import Product from "./components/assents/productsList";
import { All } from "./AppStyled";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <All />
      <GlobalStyle/>

      <Filters />
      <Home Produto={Product} />
      <Card />

      <All />
    </>
  );
};
export default App;
