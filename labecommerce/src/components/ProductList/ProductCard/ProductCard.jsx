import React from "react";
import { StylesProductCard } from "./ProductCardStyle";

export default function ProductCard(props) {
  const { Produto } = props;
  return Produto.map((item) => (
    <>
      <StylesProductCard>
        <img key={item.id} src={item.imageUrl} alt="Imagem do Produto" />
        <p>{item.name}</p>
        <p>{item.value}</p>
        <button>Adicionar ao Carrinho</button>
      </StylesProductCard>
    </>
  ));
}
