import { React } from "react";

import { SectionStyle } from "./FilterStyle";

export default function Filters() {
  return (
    <SectionStyle>
      <h2>Filters</h2>
      <div>
        <p>Valor mínimo:</p>
        <input></input>
      </div>

      <div>
        <p>Valor máximo:</p>
        <input></input>
      </div>

      <div>
        <p>Busca por nome:</p>
        <input></input>
      </div>
    </SectionStyle>
  );
}
