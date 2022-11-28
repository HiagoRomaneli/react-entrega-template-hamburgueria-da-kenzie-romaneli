import { Button } from "../../styles/buttons";
import {
  StyledH3,
  StyledParagraphValue,
  StyledSmall,
} from "../../styles/typography";

export const Product = ({ element, handleClick }) => {
  return (
    <li>
      <img src={element.img} alt="" />
      <div>
        <StyledH3>{element.name}</StyledH3>
        <StyledSmall>{element.category}</StyledSmall>
        <StyledParagraphValue>
          {element.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledParagraphValue>
        <Button onClick={() => handleClick(element.id)}>Adicionar</Button>
      </div>
    </li>
  );
};
