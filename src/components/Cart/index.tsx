import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { StyledSmall } from "../../styles/typography";
import { CardCart } from "./CardCart";
import { StyledCartModal, StyleNotFound } from "./cart";

export const Cart = () => {
  const { currentSale, modal, setModal } = useContext(CartContext);

  return (
    <>
      {modal && (
        <StyledCartModal>
          <div className="modal-container">
            <div className="divCarrinho">
              <h3>Carrinho de compras</h3>
              <button onClick={() => setModal(false)}>X</button>
            </div>
            {currentSale.length === 0 ? (
              <StyleNotFound>
                <h4>Sua sacola está vazia</h4>
                <StyledSmall>Adicione itens</StyledSmall>
              </StyleNotFound>
            ) : (
              <CardCart />
            )}
          </div>
        </StyledCartModal>
      )}
    </>
  );
};
