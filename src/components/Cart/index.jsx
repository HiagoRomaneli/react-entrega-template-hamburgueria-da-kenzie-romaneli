import {
  StyleButtonRemoverAll,
  StyledButtonRemove,
} from "../../styles/buttons";
import {
  StyledH4,
  StyledParagraphValueGrey,
  StyledSmall,
} from "../../styles/typography";
import {
  StyledCart,
  StyledLIstCart,
  StyledSpanTotalValue,
  StyleNotFound,
} from "./cart";

export const Cart = ({ currentSale, setCurrentSale }) => {
  const totalPrice = currentSale.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, 0);

  const removeProduct = (productSelect) => {
    const product = currentSale.filter((element) => {
      return element !== productSelect;
    });

    setCurrentSale(product);
  };

  return (
    <StyledCart>
      <div className="divCarrinho">
        <h3>Carrinho de compras</h3>
      </div>
      {currentSale.length === 0 ? (
        <StyleNotFound>
          <h4>Sua sacola esta vazia</h4>
          <StyledSmall>Adicione itens</StyledSmall>
        </StyleNotFound>
      ) : (
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
              <StyleButtonRemoverAll onClick={() => setCurrentSale([])}>
                Remover todos
              </StyleButtonRemoverAll>
            </div>
          </StyledSpanTotalValue>
        </div>
      )}
    </StyledCart>
  );
};
