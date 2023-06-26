import React from "react";
import {
  FiltroInput,
  TitulosPagina,
  FiltroPagina,
  SectionStyle,
} from "./FilterStyled";

export default function Filters() {
  return (
    <SectionStyle>
      <FiltroPagina>Filters</FiltroPagina>

      <TitulosPagina htmlFor="textMin">Valor mínimo:</TitulosPagina>
      <FiltroInput type="number" id="textMin" name="textMin" />

      <TitulosPagina htmlFor="textMax">Valor máximo:</TitulosPagina>
      <FiltroInput type="number" id="textMax" name="textMax" />

      <TitulosPagina htmlFor="textNome">Busca por nome:</TitulosPagina>
      <FiltroInput type="text" id="textNome" name="textNome" />
    </SectionStyle>
  );
}
