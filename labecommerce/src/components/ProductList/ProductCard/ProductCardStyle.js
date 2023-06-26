import styled from "styled-components";

export const StylesProductCard = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 10px;
  height: auto;
  width: 20vw;
  align-self: center;
  img {
    border: 1px solid black;
    height: auto;
    width: auto;
  }
  p {
    margin-left: 10px;
  }
  button {
    align-self: center;
    margin-bottom: 10px;
  }
`;

