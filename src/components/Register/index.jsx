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

export const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaRegister),
  });
  const navigate = useNavigate();

  const onSubmitForm = async (data) => {
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
            htmlFor={"name"}
            placeholder={"Digite seu nome"}
            type={"text"}
            id={"name"}
            label={"Nome"}
            register={register("name")}
          />
          {errors.name && <StyledError>{errors.name.message}</StyledError>}
          <Input
            htmlFor={"email"}
            placeholder={"Digite seu email"}
            type={"email"}
            id={"email"}
            label={"Senha"}
            register={register("email")}
          />
          {errors.email && <StyledError>{errors.email.message}</StyledError>}
          <Input
            type={"password"}
            placeholder={"Senha"}
            register={register("password")}
          />
          {errors.password && (
            <StyledError>{errors.password.message}</StyledError>
          )}
          <Input
            type={"password"}
            placeholder={"Confirmar Senha"}
            register={register("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <StyledError>{errors.passwordConfirm.message}</StyledError>
          )}
          <StyleButtonGrey type="submit">Cadastrar</StyleButtonGrey>
        </form>
      </StyledRegister>
    </>
  );

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm({
  //   resolver: yupResolver(formSchema),
  // });

  // const onSubmit = async (data) => {
  //   console.log("oi");
  //   console.log(data);
  //   // try {
  //   //   const response = await api.post("users", data);
  //   //   toast.success("Conta criada com sucesso!");
  //   //   navigate("/");
  //   // } catch (error) {
  //   //   toast.error("Ops! Algo deu errado");
  //   // }
  //   // reset();
  // };
  // return (
  //   <>
  //     <div className="div-logo">
  //       <Logo />
  //     </div>
  //     <StyledRegister>
  //       <form onSubmit={handleSubmit((data) => console.log("oi"))}>
  //         <div>
  //           <h3>Cadastro</h3>
  //           <Link to={"/"}>Retornar para login</Link>
  //         </div>
  //         <label htmlFor="name">Nome</label>
  //         <input
  //           type="text"
  //           placeholder="Digite seu nome aqui..."
  //           {...register("name")}
  //         />
  //         <label htmlFor="email">Email</label>
  //         <input
  //           type="email"
  //           placeholder="Digite seu email aqui..."
  //           {...register("email")}
  //         />

  //         <input
  //           type="password"
  //           placeholder="Digite sua senha aqui..."
  //           {...register("password")}
  //         />

  //         {/* <input
  //           type="password"
  //           placeholder="Confirmar senha"
  //           {...register("passwordConfirm")}
  //         /> */}
  //         <StyleButtonGrey type="submit">Cadastrar</StyleButtonGrey>
  //       </form>
  //     </StyledRegister>
  //   </>
  // );
};

{
  /* <Input
            htmlFor={"id"}
            id={"name"}
            label={"Nome"}
            type={"text"}
            placeholder={"Digite seu nome"}
            register={register("name")}
          />
          {errors.name && <StyledError>{errors.name.message}</StyledError>}
          <Input
            htmlFor={"id"}
            id={"email"}
            label={"Email"}
            type={"email"}
            placeholder={"Digite seu email"}
            register={register("email")}
          />
          {errors.email && <StyledError>{errors.email.message}</StyledError>}
          <Input
            type={"password"}
            placeholder={"Senha"}
            register={register("password")}
          />
          {errors.password && (
            <StyledError>{errors.password.message}</StyledError>
          )}
          <Input
            type={"password"}
            placeholder={"Comfirmar Senha"}
            register={register("passwordConfirm")}
          />
          {errors.password && (
            <StyledError>{errors.password.message}</StyledError>
          )} */
}
