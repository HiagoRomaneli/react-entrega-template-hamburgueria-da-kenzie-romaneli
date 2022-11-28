import { StyledSmall } from "../../styles/typography";
import { Card } from "./CardCart";
import { StyledCart, StyleNotFound } from "./cart";

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
          <h4>Sua sacola está vazia</h4>
          <StyledSmall>Adicione itens</StyledSmall>
        </StyleNotFound>
      ) : (
        <Card
          totalPrice={totalPrice}
          currentSale={currentSale}
          removeProduct={removeProduct}
          setCurrentSale={setCurrentSale}
        />
      )}
    </StyledCart>
  );
};
