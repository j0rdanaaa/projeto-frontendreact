import styled from "styled-components";

export const AppStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    @media (max-width: 1280px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;     
    }
`

export const Header = styled.header`
    display: flex;
    border: 1px solid #000;
    padding: 20px;
    `