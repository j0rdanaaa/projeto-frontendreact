import React from "react";
import { HomeStyles, CardStyles, InfoStyles } from "./HomeStyled";
import ProductCard from "../ProductCard/ProductCard";

export default function Home(props) {
  const { Produto } = props;
  return (
    <HomeStyles>
      <InfoStyles>
        <h3>Quantidade de produtos:</h3>
        <div>
          <h4>Ordenação:</h4>
          <select name="orderSelection">
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </div>
      </InfoStyles>

      <CardStyles>
        <ProductCard Produto={Produto} />
      </CardStyles>
    </HomeStyles>
  );
}
