import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/PoductsList";
import "react-toastify/dist/ReactToastify.css";

export const DashBoard = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductsList />
        <Cart />
      </main>
    </div>
  );
};
