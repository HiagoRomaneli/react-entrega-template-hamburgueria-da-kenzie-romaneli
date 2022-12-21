import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const ProductsContext = createContext({});

export const ProductsProviders = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredList, setFilteredList] = useState(products);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const token = window.localStorage.getItem("@TOKEN");
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const filterProducts = () => {
    const search = inputValue.toLowerCase();
    const productsFilter = products.filter(
      (element) =>
        element.category.toLowerCase().includes(search) ||
        element.name.toLowerCase().includes(search)
    );
    setFilteredList(productsFilter);
  };

  const handleClick = (productId) => {
    const product = products.find((element) => element.id === productId);

    const verification = currentSale.some(
      (element) => element.id === productId
    );

    if (verification) {
      toast("Item já incluso no carrinho!");
    } else {
      return setCurrentSale([...currentSale, product]);
    }
  };

  const totalPrice = currentSale.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, 0);

  const removeProduct = (productSelect) => {
    const product = currentSale.filter((element) => {
      return element !== productSelect;
    });

    setCurrentSale(product);
  };

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        currentSale,
        setCurrentSale,
        filteredList,
        setFilteredList,
        inputValue,
        setInputValue,
        filterProducts,
        handleClick,
        totalPrice,
        removeProduct,
        logout,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
