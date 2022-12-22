import logo from "../../assets/img/logo.svg";
import { StyledHeader } from "../../styles/header";
import logof from "../../assets/img/logof.png";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import cart from "../../assets/img/cart.png";

export const Header = () => {
  const { setInputValue, filterProducts, logout, setModal, currentSale } =
    useContext(CartContext);

  return (
    <StyledHeader>
      <h1>
        <img src={logo} alt="logotipo" />
      </h1>
      <div>
        <div>
          <input
            type="text"
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Digite sua pesquisa"
          />
          <button onClick={() => filterProducts()}>Pesquisar</button>
        </div>
        <button className="btn-cart" onClick={() => setModal(true)}>
          <img src={cart} alt="imagem de um carrinho" />
          <span className="cart">{currentSale.length}</span>
        </button>
        <button onClick={logout}>
          <img src={logof} alt="icone de sair" />
        </button>
      </div>
    </StyledHeader>
  );
};
