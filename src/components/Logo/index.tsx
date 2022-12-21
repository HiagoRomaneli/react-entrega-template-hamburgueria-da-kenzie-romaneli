import { StyledLogoDiv } from "./logo";
import imgLogo from "../../assets/img/logoo.png";
import imgBag from "../../assets/img/shopping-bag.png";
import imgPoints from "../../assets/img/Ground135.png";

export const Logo = () => {
  return (
    <StyledLogoDiv>
      <img src={imgLogo} alt="imagem logotipo" />
      <div>
        <div>
          <img src={imgBag} alt="imagem bolsa" />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <strong>melhores</strong> ingredientes.
        </p>
      </div>
      <img className="img-points" src={imgPoints} alt="imagem de pontos" />
    </StyledLogoDiv>
  );
};
