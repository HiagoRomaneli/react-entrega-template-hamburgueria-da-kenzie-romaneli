import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const selfLogin = async () => {
      const token = window.localStorage.getItem("@TOKEN");
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (token) {
        try {
          await api.get("products");
          setLogin(true);
          navigate("/dashboard");
        } catch (error) {
          window.localStorage.clear();
          navigate("/");
        }
      } else {
        navigate("/");
      }
    };
    selfLogin();
  }, []);

  return (
    <UserContext.Provider value={{ login, setLogin, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
