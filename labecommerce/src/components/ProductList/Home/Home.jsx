import React from "react";
import { HomeStyles, CardStyles, InfoStyles } from "./HomeStyled";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

export default function Home(props) {
  const { Produto } = props;
  const [ordination, setOrdination] = useState ("");

  return (
    <HomeStyles>
      <InfoStyles>
        <h3>Quantidade de produtos:</h3>
        <div>
          <h4>Ordenação:</h4>
          <select name="orderSelection" onChange={(e) => setOrdination(e.target.value)}>
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
