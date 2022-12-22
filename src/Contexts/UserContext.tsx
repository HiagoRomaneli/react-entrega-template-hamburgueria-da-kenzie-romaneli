import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface IuserContext {
  children: React.ReactNode;
}

interface IuserContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Iregister {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface Idata {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

export const UserContext = createContext({} as IuserContextProps);

export const UserProvider = ({ children }: IuserContext) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const selfLogin = async () => {
      const token = window.localStorage.getItem("@TOKEN");
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (token) {
        try {
          await api.get("products");
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
    <UserContext.Provider value={{ loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
