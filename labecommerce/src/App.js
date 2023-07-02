import React from "react";
import Filters from "./components/Filters/Filters";
import Home from "./components/ProductList/Home/Home";
import Card from "./components/ShoppingCart/Cart/Cart";
import products from "./assents/productsList";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import { Header } from "./components/ProductList/Home/HomeStyle";
import { All } from "./AppStyled";

function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  function addCart (productAdd) {
    const item = cart.find((produto) => produto.id === productAdd.produto.id);

    if (!item) {
      cart.push({id: productAdd.produto.id, name: productAdd.produto.name,value: productAdd.produto.value,
        qtd: 1});
    } else {
      item.qtd = item.qtd + 1;
    }

    setAmount(amount + productAdd.produto.value);
  }

  function removeCart(productRem) {
    const check = cart.find((produto) => produto.id === productRem.produto.id);

    if (check && productRem.produto.qtd === 1) {
      const itemRemovido = cart.filter(
        (produto) => produto.id !== productRem.produto.id
      );
      setCart(itemRemovido);
    } else {
      check.qtd = check.qtd - 1;
    }

    setAmount(amount - productRem.produto.value);
  }

  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>Lojinha</h1>
      </Header>
      <All>
        <Filters
          products={products}
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          products={products}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          addCart={addCart}
        />
        <Card
          products={products}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          removeCart={removeCart}
        />
      </All>
    </>
  );
}

export default App;
