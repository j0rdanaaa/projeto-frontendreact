import React from "react";
import { Filters, Form, StyleButton } from "./FilterStyle";

function Filter({
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
}) {
  const handleSearch = (event) => {
    setSearchFilter(event.target.value);
  };

  const handleMin = (event) => {
    setMinFilter(event.target.value);
  };

  const handleMax = (event) => {
    setMaxFilter(event.target.value);
  };

  
  return (
    <Filters>
      <h1>Filters</h1>
      <Form>
        <label>Valor mínimo:</label>
        <input
          type="number"
          placeholder="R$"
          value={minFilter}
          min="1"
          max="500"
          onChange={handleMin}
        />

        <label>Valor máximo:</label>
        <input
          type="number"
          placeholder="R$"
          value={maxFilter}
          min="1"
          max="500"
          onChange={handleMax}
        />

        <label>Busca por nome:</label>
        <input
          type="text"
          placeholder="Busca por nome"
          onChange={handleSearch}
          value={searchFilter}
        />
        
      </Form>
    </Filters>
  );
}
export default Filter;
