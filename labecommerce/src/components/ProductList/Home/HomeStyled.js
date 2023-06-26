import styled from "styled-components";

export const HomeStyles = styled.div`
 grid-column: 3/11;
    border: 2px solid black;
`;

export const InfoStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px 0 5px 0;

  div {
    display: flex;
        justify-self: end;
  }
`;

export const CardStyles = styled.div`
 display: flex;
`;
