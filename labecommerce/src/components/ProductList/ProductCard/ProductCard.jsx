import React from "react";
import { StylesProductCard } from "./ProductCardStyle";

export default function ProductCard(props) {
  const { produto } = props;

  return (
    produto.map((item) => 
    <StylesProductCard>
      <img key={item.id} src={item.imageUrl} alt="Imagem do Produto" />
      <p>{item.name}</p>
      <p>{item.value}</p>
      <button>Adicionar ao Carrinho</button>
    </StylesProductCard>
  ));
}
