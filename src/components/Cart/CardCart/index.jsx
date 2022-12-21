import { useContext } from "react";
import { ProductsContext } from "../../../Contexts/PorductsContext";
import { StyleButtonGrey, StyledButtonRemove } from "../../../styles/buttons";
import {
  StyledH4,
  StyledParagraphValueGrey,
  StyledSmall,
} from "../../../styles/typography";
import { StyledLIstCart, StyledSpanTotalValue } from "../cart";

export const CardCart = () => {
  const { currentSale, setCurrentSale, removeProduct, totalPrice } =
    useContext(ProductsContext);

  return (
    <div>
      <StyledLIstCart>
        {currentSale.map((product, index) => (
          <li key={index}>
            <div>
              <img src={product.img} alt="" />
              <div>
                <StyledH4>{product.name}</StyledH4>
                <StyledSmall>{product.category}</StyledSmall>
              </div>
            </div>
            <StyledButtonRemove onClick={() => removeProduct(product)}>
              Remover
            </StyledButtonRemove>
          </li>
        ))}
      </StyledLIstCart>
      <StyledSpanTotalValue>
        <div>
          <h5>Total:</h5>
          <StyledParagraphValueGrey>
            {totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </StyledParagraphValueGrey>
        </div>
        <div>
          <StyleButtonGrey onClick={() => setCurrentSale([])}>
            Remover todos
          </StyleButtonGrey>
        </div>
      </StyledSpanTotalValue>
    </div>
  );
};
