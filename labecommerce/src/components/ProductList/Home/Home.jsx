import React, { useState } from "react";
import { HomeStyles, CardStyles, InfoStyles } from "./HomeStyled";
import ProductCard from "../ProductCard/ProductCard";

export default function Home(props) {
  const { produto } = props;
  const [ordination, setOrdination] = useState("");

  return (
    <HomeStyles>
      <InfoStyles>
        <h3>Quantidade de produtos:</h3>
        <div>
          <h4>Ordenação:</h4>
          <select
            value={ordination}
            onChange={(e) => setOrdination(e.target.value)}
          >
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </div>
      </InfoStyles>

      <CardStyles>
        <ProductCard produto={produto} />
      </CardStyles>
    </HomeStyles>
  );
}
