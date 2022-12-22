import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
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
  totalPrice: () => number;
  removeProduct: (productSelect: Iproducts) => void;
  logout: () => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  addQuantityProductsCart: (productId: number) => void;
  removeQuantityProductsCart: (productId: number) => void;
}

interface Iproducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  qntd: number;
}

export const CartContext = createContext({} as IproductsProps);

export const CartProviders = ({ children }: IproductsContextProps) => {
  const [products, setProducts] = useState([] as Iproducts[]);
  const [currentSale, setCurrentSale] = useState([] as Iproducts[]);
  const [filteredList, setFilteredList] = useState(products);
  const [inputValue, setInputValue] = useState("");
  const [modal, setModal] = useState(false);
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

    if (verification && product !== undefined) {
      product.qntd++;
    } else if (product !== undefined) {
      product.qntd = 1;
      setCurrentSale([...currentSale, product]);
    }
  };

  const addQuantityProductsCart = (productId: number) => {
    const product = currentSale.find((element) => element.id === productId);

    if (product !== undefined) {
      product.qntd++;
      setCurrentSale([...currentSale]);
    }
  };

  const removeQuantityProductsCart = (productId: number) => {
    const product = currentSale.find((element) => element.id === productId);

    if (product !== undefined) {
      product.qntd--;
      setCurrentSale([...currentSale]);
    }

    if (product?.qntd === 0) {
      removeProduct(product);
    }
  };

  const totalPrice = () => {
    const pricesProducts = currentSale.map(
      (product) => product.price * product.qntd
    );

    const total = pricesProducts.reduce((acc, currentValue) => {
      return acc + currentValue;
    });

    return total;
  };

  const removeProduct = (productSelect: Iproducts) => {
    const products = currentSale.filter((element) => {
      return element !== productSelect;
    });

    setCurrentSale(products);
  };

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <CartContext.Provider
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
        modal,
        setModal,
        addQuantityProductsCart,
        removeQuantityProductsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
