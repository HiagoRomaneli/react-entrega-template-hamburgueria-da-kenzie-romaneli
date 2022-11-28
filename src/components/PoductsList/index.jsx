import { Product } from "../Product";
import { StyledListProducts } from "./ProductsList";

export const ProductsList = ({ products, handleClick }) => {
  return (
    <StyledListProducts>
      {products.map((element, index) => (
        <Product key={index} element={element} handleClick={handleClick} />
      ))}
    </StyledListProducts>
  );
};
