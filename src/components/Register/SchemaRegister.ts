import * as yup from "yup";

export const SchemaRegister = yup.object().shape({
  name: yup
    .string()
    .min(3, "Seu nome deve ter no mínimo 3 caracteres")
    .required("Nome obrigatório"),
  email: yup
    .string()
    .required("Email orbigatório")
    .email("Digite um email válido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Sua senha deve ter no mínimo 8 digitos")
    .matches(/(?=.*[A-Za-z])/, "Sua senha deve conter ao menos uma letra")
    .matches(/(?=.*[0-9])/, "Sua senha deve conter ao menos um número")
    .matches(
      /(?=.*[$*&@#])/,
      "Sua senha deve conter ao menos um caractere especial ( $ * & @ # )"
    ),
  passwordConfirm: yup
    .string()
    .required("Confirmar senha obrigatório")
    .oneOf([yup.ref("password")], "Senhas não conferem"),
});
