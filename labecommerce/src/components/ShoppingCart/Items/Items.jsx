import { ItemsContainer } from "./ItemsStyle";

function Items(props) {
  const { produto } = props;
  const { removeCart } = props;

  return (
    <ul>
      <ItemsContainer>
        <p>
          {props.name}: {props.qtd}
        </p>

        <button onClick={() => removeCart({ produto })}>Remover</button>
      </ItemsContainer>
    </ul>
  );
}
export default ItemsContainer;
