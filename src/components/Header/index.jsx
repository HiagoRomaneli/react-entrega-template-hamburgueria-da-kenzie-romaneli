import logo from "../../assets/img/logo.svg";
import { StyledHeader } from "../../styles/header";

export const Header = ({ setInputValue, filterProducts }) => {
  return (
    <StyledHeader>
      <h1>
        <img src={logo} alt="logotipo" />
      </h1>
      <div>
        <input
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Digite sua pesquisa"
        />
        <button onClick={() => filterProducts()}>Pesquisar</button>
      </div>
    </StyledHeader>
  );
};
