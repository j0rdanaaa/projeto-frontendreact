import React from "react";
import GlobalStyles from "./components/ShoppingCart/Items/ItemsStyle";
import Filters from "./components/Filters/Filters";
import Home from "./components/ProductList/Home/Home";
import ProductCard from "./components/ProductList/ProductCard/ProductCard";
import Cart from "./components/ShoppingCart/Cart/Cart";
import { Items } from "./components/ShoppingCart/Items/Items";

const App = () => {
  return (
    <>
      <GlobalStyles />

      <div className="App">
        <Filters />

        <div>
          <Home />
          <ProductCard />
        </div>

        <div>
          <Cart />
          <Items />
        </div>
      </div>
    </>
  );
};

export default App;
