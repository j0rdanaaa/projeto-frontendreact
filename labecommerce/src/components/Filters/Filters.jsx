import React from "react";
import {
  FiltroInput,
  TitulosPagina,
  FiltroPagina,
  SectionStyle,
} from "./FilterStyled";

export default function Filters(props) {
  const {
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
  } = props;

  return (
    <SectionStyle>
      <FiltroPagina>Filters</FiltroPagina>

      <TitulosPagina htmlFor="textMin">Valor mínimo:</TitulosPagina>
      <FiltroInput
        value={minFilter}
        onChange={
        minFilter >= 0 ? (e) => setMinFilter(e.target.value) : setMinFilter(0)
        }
        type="number"
        id="textMin"
        name="textMin"
      />

      <TitulosPagina htmlFor="textMax">Valor máximo:</TitulosPagina>
      <FiltroInput
        value={maxFilter}
        onChange={
          maxFilter >= 0 ? (e) => setMaxFilter(e.target.value) : setMaxFilter(0)
        }
        type="number"
        id="textMax"
        name="textMax"
      />

      <TitulosPagina htmlFor="textNome">Busca por nome:</TitulosPagina>
      <FiltroInput
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        type="text"
        id="textNome"
        name="textNome"
      />
    </SectionStyle>
  );
}
