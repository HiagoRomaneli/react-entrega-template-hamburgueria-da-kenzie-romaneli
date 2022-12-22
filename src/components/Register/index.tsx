import { Link, useNavigate } from "react-router-dom";
import { StyleButtonGrey } from "../../styles/buttons";
import { Input } from "../Input";
import { Logo } from "../Logo";
import { StyledRegister } from "./register";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaRegister } from "./SchemaRegister";
import { StyledError } from "../../styles/typography";
import { Idata, Iregister } from "../../Contexts/UserContext";

export const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Iregister>({
    mode: "onBlur",
    resolver: yupResolver(SchemaRegister),
  });
  const navigate = useNavigate();

  const onSubmitForm = async (data: Idata) => {
    try {
      await api.post("users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
    reset();
  };

  return (
    <>
      <div className="div-logo">
        <Logo />
      </div>
      <StyledRegister>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div>
            <h3>Cadastro</h3>
            <Link to={"/"}>Retornar para login</Link>
          </div>
          <Input
            placeholder={"Digite seu nome"}
            type={"text"}
            id={"name"}
            label={"Nome"}
            register={register("name")}
          />
          {errors.name && <StyledError>{errors.name.message}</StyledError>}
          <Input
            placeholder={"Digite seu email"}
            type={"email"}
            id={"email"}
            label={"Email"}
            register={register("email")}
          />
          {errors.email && <StyledError>{errors.email.message}</StyledError>}
          <Input
            type={"password"}
            placeholder={"Senha"}
            register={register("password")}
            id={"password"}
            label={"Senha"}
          />
          {errors.password && (
            <StyledError>{errors.password.message}</StyledError>
          )}
          <Input
            type={"password"}
            placeholder={"Confirmar Senha"}
            register={register("passwordConfirm")}
            id={"passwordConfirm"}
            label={"Confirmar Senha"}
          />
          {errors.passwordConfirm && (
            <StyledError>{errors.passwordConfirm.message}</StyledError>
          )}
          <StyleButtonGrey type="submit">Cadastrar</StyleButtonGrey>
        </form>
      </StyledRegister>
    </>
  );
};
