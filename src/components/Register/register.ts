import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  max-width: 500px;
  min-width: 300px;
  border: 2px solid var(--grey-20);
  border-radius: 5px;
  padding: 26px 24px;
  gap: 19px;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 14px;
      font-weight: 500;
      color: var(--grey-50);
      text-decoration: underline;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;

    input {
      padding: 25px;
      border: 2px solid var(--grey-50);
      border-radius: 8px;
      font-size: 16px;
      font-weight: 400;
      color: var(--grey-100);
    }

    label {
      font-size: 12px;
      font-weight: 400;
      color: var(--grey-10);
    }
  }

  button {
    height: 60px;
  }
`;
