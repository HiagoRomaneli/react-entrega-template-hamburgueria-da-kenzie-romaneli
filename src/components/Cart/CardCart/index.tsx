import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext";
import { StyleButtonGrey, StyledButtonRemove } from "../../../styles/buttons";
import { StyledH4, StyledParagraphValueGrey } from "../../../styles/typography";
import { StyledLIstCart, StyledSpanTotalValue } from "../cart";

export const CardCart = () => {
  const {
    currentSale,
    setCurrentSale,
    removeProduct,
    totalPrice,
    addQuantityProductsCart,
    removeQuantityProductsCart,
  } = useContext(CartContext);

  return (
    <div>
      <StyledLIstCart>
        {currentSale.map((product, index) => (
          <li key={index}>
            <div>
              <img src={product.img} alt="" />
              <div>
                <StyledH4>{product.name}</StyledH4>
                <div className="div-count">
                  <button
                    onClick={() => removeQuantityProductsCart(product.id)}
                  >
                    -
                  </button>
                  <span>{product.qntd}</span>
                  <button onClick={() => addQuantityProductsCart(product.id)}>
                    +
                  </button>
                </div>
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
            {totalPrice().toLocaleString("pt-BR", {
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
