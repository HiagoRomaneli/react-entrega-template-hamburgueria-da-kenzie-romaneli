import logo from "../../assets/img/logo.svg";
import { StyledHeader } from "../../styles/header";
import logof from "../../assets/img/logof.png";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/PorductsContext";

export const Header = () => {
  const { setInputValue, filterProducts, logout } = useContext(ProductsContext);

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
        <button onClick={logout}>
          <img src={logof} alt="icone de sair" />
        </button>
      </div>
    </StyledHeader>
  );
};
