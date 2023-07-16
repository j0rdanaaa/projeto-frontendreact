import Itens from "../Items/Items";
import { CartStyle } from "./CartStyle";
import React from "react";

function Cart(props) {
  const { cart } = props;
  const { amount } = props;
  const { removeCart } = props;

  return (
    <CartStyle>
      <h1>Viagens</h1>
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

      <p>Valor total: R$ {amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
    </CartStyle>
  );
}
export default Cart;
