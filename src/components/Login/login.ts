import styled from "styled-components";

export const StyledLogin = styled.div`
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

  h3 {
    text-align: start;
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

    button {
      background-color: var(--color-primary);

      :hover {
        background-color: var(--color-primary-2);
      }
    }
  }

  button {
    height: 60px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: var(--grey-10);
    max-width: 327px;
    min-width: 250px;
    text-align: center;
  }
`;
