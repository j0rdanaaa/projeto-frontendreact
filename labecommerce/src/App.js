import React from "react";
import Filters from "./components/Filters/Filters";
import Home from "./components/ProductList/Home/Home";
import Card from "./components/ShoppingCart/Cart/Cart";
import { All } from "./AppStyled";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import Product from "./assents/productsList";


function App() {
  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

   

  return (
    <>
      <All />
      <GlobalStyle />

      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Home 
        produto={Product}
        amount={amount}
        setAmont={setAmount}
        cart={cart}
        setCart={setCart}
      />
      <Card
        amount={amount}
        setAmont={setAmount}
        cart={cart}
        setCart={setCart}
      />

      <All />
    </>
  );
}

export default App;
