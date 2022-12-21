export const Input = ({ id, label, type, placeholder, register }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register} />
    </>
  );
};
