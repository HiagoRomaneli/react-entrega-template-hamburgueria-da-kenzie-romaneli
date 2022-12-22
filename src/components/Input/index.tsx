import { UseFormRegisterReturn } from "react-hook-form";
import { StyledDivInputs } from "./input";

interface IinputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

export const Input = ({
  id,
  label,
  type,
  placeholder,
  register,
}: IinputProps) => {
  return (
    <StyledDivInputs>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register} />
    </StyledDivInputs>
  );
};
