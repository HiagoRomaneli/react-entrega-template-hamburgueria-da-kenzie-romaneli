import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button, StyleButtonGrey } from "../../styles/buttons";
import { StyledLogin } from "./login";
import { Logo } from "../Logo";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaLogin } from "./SchemaLogin";
import { StyledError } from "../../styles/typography";

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaLogin),
  });

  const registerPage = () => {
    navigate("/register");
  };

  const onSubmitForm = async (data) => {
    try {
      const response = await api.post("login", data);
      toast.success("Login realizado com sucesso!");
      window.localStorage.setItem("@TOKEN", response.data.accessToken);
      window.localStorage.setItem("@USERID", response.data.user.id);
      navigate("/dashboard");
    } catch (error) {
      toast.error("verifique login e senha e tente novamente!");
    }
  };

  return (
    <>
      <StyledLogin>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Digite seu email aqui..."}
            register={register("email")}
          />
          {errors.email && <StyledError>{errors.email.message}</StyledError>}
          <Input
            label={"Senha"}
            type={"password"}
            placeholder={"Digite sua senha aqui..."}
            register={register("password")}
          />
          {errors.password && (
            <StyledError>{errors.password.message}</StyledError>
          )}
          <Button type="submit">Logar</Button>
        </form>
        <span>
          Crie sua conta para saborear muitas delicias e matar sua fome!
        </span>
        <StyleButtonGrey onClick={registerPage}>Cadastrar</StyleButtonGrey>
      </StyledLogin>
      <Logo />
    </>
  );
};
