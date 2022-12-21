import { useContext } from "react";
import { ProductsContext } from "../../Contexts/PorductsContext";
import { Button } from "../../styles/buttons";
import {
  StyledH3,
  StyledParagraphValue,
  StyledSmall,
} from "../../styles/typography";

export const Card = () => {
  const { handleClick } = useContext(ProductsContext);
  const { products, filteredList } = useContext(ProductsContext);
  return (
    <>
      {filteredList.length > 0
        ? filteredList.map((element, index) => {
            return (
              <li key={index}>
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
                  <Button onClick={() => handleClick(element.id)}>
                    Adicionar
                  </Button>
                </div>
              </li>
            );
          })
        : products.map((element, index) => {
            return (
              <li key={index}>
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
                  <Button onClick={() => handleClick(element.id)}>
                    Adicionar
                  </Button>
                </div>
              </li>
            );
          })}
    </>
  );
};
