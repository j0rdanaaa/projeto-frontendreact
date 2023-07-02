import React from "react";
import { CartStyles } from "./CartStyle";
import Itens from "../Items/Items";

 function Cart(props) {
  const { cart } = props;
  const { amount } = props;
  const { removeCart } = props;

  return (
    <CartStyles>
      <h1>Cart</h1>
      {cart.map((produto) => {
        return (
          <Itens
            key={produto.id}
            cart={cart}
            produto={produto}
            removeCart={removeCart}
            name={produto.name}
            valor={produto.value}
            id={produto.id}
            qtd={produto.qtd}
          />
        );
      })}

<p>Valor total: {amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </p>
    </CartStyles>
  );
}
 export default Cart;