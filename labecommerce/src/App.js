import Filter from './components/Filters/Filters'
import Home from './components/ProductList/Home/Home'
import Cart from './components/ShoppingCart/Cart/Cart'
import myProducts from './components/assents/productsList';
import React, { useState, useEffect } from "react";
import { Header, AppStyle } from "./AppStyled";

const App = () => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [ total, setTotal ] = useState(0)

  function addCart(produtoAdd) {
    const item = cart.find((produto) => produto.id === produtoAdd.produto.id);

    if (!item) {
      cart.push({
        id: produtoAdd.produto.id,
        name: produtoAdd.produto.name,
        value: produtoAdd.produto.value,
        qtd: 1,
      });
    } else {
      item.qtd = item.qtd + 1;
    }

    setAmount(amount + produtoAdd.produto.value);
  }
  function removeCart(produtoRem) {
    const check = cart.find((produto) => produto.id === produtoRem.produto.id);

    if (check && produtoRem.produto.qtd === 1) {
      const itemRemovido = cart.filter(
        (produto) => produto.id !== produtoRem.produto.id
      );
      setCart(itemRemovido);
    } else {
      check.qtd = check.qtd - 1;
    }

    setAmount(amount - produtoRem.produto.value);
  }
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let newTotal = 0;
    cart.forEach((item) => {
      newTotal += item.value * item.amount;
    });
    setTotal(newTotal);
  }, [cart, total]);

 
  return (
    <>
      <Header>
        <h1>Viagens Espaciais</h1>
      </Header>
      <AppStyle>
        <Filter
          myProducts={myProducts}
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
          myProducts={myProducts}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          addCart={addCart}
        />

        <Cart
          myProducts={myProducts}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          removeCart={removeCart}
        />
      </AppStyle>
    </>
  );
};
export default App;
