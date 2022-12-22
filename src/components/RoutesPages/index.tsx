import { Route, Routes } from "react-router-dom";
import { CartProviders } from "../../Contexts/CartContext";
import { DashBoard } from "../../pages/DashBoard";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <CartProviders>
            <DashBoard />
          </CartProviders>
        }
      />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
