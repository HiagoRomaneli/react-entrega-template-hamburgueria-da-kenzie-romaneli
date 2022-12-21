import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ProductsProviders } from "./Contexts/PorductsContext";
import { DashBoard } from "./pages/DashBoard";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProductsProviders>
              <DashBoard />
            </ProductsProviders>
          }
        />
        <Route path="*" element={<LoginPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
