import { useEffect, useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import { ProductsList } from "./components/PoductsList";
import { api } from "./services/api";
import { Header } from "./styles/header";
import logo from "./assets/img/logo.svg";

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredList, setFilteredList] = useState(products);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function showProducts() {
      try {
        const response = await api.get();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    showProducts();
  }, []);

  const filterProducts = () => {
    const search = inputValue.toLowerCase();
    const productsFilter = products.filter((element) => {
      return element.category.toLowerCase().includes(search);
    });
    setFilteredList(productsFilter);
  };

  const handleClick = (productId) => {
    const product = products.find((element) => element.id === productId);

    const verification = currentSale.some(
      (element) => element.id === productId
    );

    if (verification) {
      return "ja existe o item";
    } else {
      return setCurrentSale([...currentSale, product]);
    }
  };

  return (
    <div className="App">
      <Header>
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
      </Header>
      <main>
        <ProductsList
          products={filteredList.length > 0 ? filteredList : products}
          handleClick={handleClick}
        />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </main>
    </div>
  );
};

export default App;
