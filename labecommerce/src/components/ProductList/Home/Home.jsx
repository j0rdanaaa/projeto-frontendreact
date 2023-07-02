import React from "react";
import { HomeStyles, Header, Container, Select } from "./HomeStyle";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

export default function Home(props) {
  const [ordination, setOrdination] = useState("");
  const { products } = props;
  const { searchFilter } = props;
  const { minFilter } = props;
  const { maxFilter } = props;
  const { addCart } = props;

  const handleOrdem = (e) => {
    setOrdination(e.target.value);
  };
  return (
    <HomeStyles>
      <Header>
        <p>Quantidade de produtos: {products.lenght}</p>

        <label>
          Ordenação:
          <Select value={ordination} onChange={handleOrdem}>
            <option value={"Crescente"}>Crescente</option>
            <option value={"Decrescente"}>Decrescente</option>
          </Select>
        </label>
      </Header>

      <Container>
        {products
          .sort((produtoA, produtoB) => {
            if (ordination === "Crescente" && produtoA.name < produtoB.name) {
              return -1;
            } else if (
              ordination === "Decrescente" &&
              produtoA.name > produtoB.name
            ) {
              return -1;
            } else {
              return 0;
            }
          })
          .filter((produto) => {
            return produto.name
              .toLowerCase()
              .includes(searchFilter.toLowerCase());
          })
          .filter((produto) => {
            if (produto.value >= minFilter && produto.value <= maxFilter) {
              return produto.value >= minFilter && produto.value <= maxFilter;
            } else {
              return produto;
            }
          })
          .map((produto, index) => {
            return (
              <ProductCard
                key={index}
                addCart={addCart}
                name={produto.name}
                valor={produto.value}
                img={produto.imageUrl}
                Pro={produto}
              />
            );
          })}
      </Container>
    </HomeStyles>
  );
}
