import { ItemsContainer } from "./ItemsStyle";

function Items(props) {
  const { produto } = props;
  

  return (
    <ul>
      <ItemsContainer>
        <p>
          {produto.name}x {produto.qtd}
        </p>
      </ItemsContainer>
    </ul>
  );
}
export default ItemsContainer;
