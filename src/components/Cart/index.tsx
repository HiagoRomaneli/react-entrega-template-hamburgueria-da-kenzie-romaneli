import { useContext } from "react";
import { ProductsContext } from "../../Contexts/PorductsContext";
import { StyledSmall } from "../../styles/typography";
import { CardCart } from "./CardCart";
import { StyledCart, StyleNotFound } from "./cart";

export const Cart = () => {
  const { currentSale } = useContext(ProductsContext);

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
        <CardCart />
      )}
    </StyledCart>
  );
};
