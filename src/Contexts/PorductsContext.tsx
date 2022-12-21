import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IproductsContextProps {
  children: React.ReactNode;
}

interface IproductsProps {
  products: Iproducts[];
  setProducts: React.Dispatch<React.SetStateAction<Iproducts[]>>;
  currentSale: Iproducts[];
  setCurrentSale: React.Dispatch<React.SetStateAction<Iproducts[]>>;
  filteredList: Iproducts[];
  setFilteredList: React.Dispatch<React.SetStateAction<Iproducts[]>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  filterProducts: () => void;
  handleClick: (productId: number) => void;
  totalPrice: number;
  removeProduct: (productSelect: Iproducts) => void;
  logout: () => void;
}

interface Iproducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const ProductsContext = createContext({} as IproductsProps);

export const ProductsProviders = ({ children }: IproductsContextProps) => {
  const [products, setProducts] = useState([] as Iproducts[]);
  const [currentSale, setCurrentSale] = useState([] as Iproducts[]);
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

  const handleClick = (productId: number) => {
    const product = products.find((element) => element.id === productId);

    const verification = currentSale.some(
      (element) => element.id === productId
    );

    if (verification) {
      toast("Item já incluso no carrinho!");
    } else if (product !== undefined) {
      return setCurrentSale([...currentSale, product]);
    }
  };

  const totalPrice = currentSale.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, 0);

  const removeProduct = (productSelect: Iproducts) => {
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
