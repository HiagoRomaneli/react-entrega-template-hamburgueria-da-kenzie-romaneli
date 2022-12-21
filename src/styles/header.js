import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  min-height: 5rem;
  background-color: var(--grey-0);

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    div {
      input {
        width: 22.8125rem;
        height: 60px;
        border: 2px solid var(--grey-20);
        border-radius: var(--border-radius);
        padding: 0 0.9375rem;
      }

      button {
        padding: 0 1.25rem;
        border: none;
        border-radius: var(--border-radius);
        background-color: var(--color-primary);
        height: 40px;
        color: var(--grey-0);
        position: absolute;
        top: 10px;
        right: 10px;
        :hover {
          background-color: var(--color-primary-2);
        }
      }
    }
  }

  div {
    position: relative;

    @media (max-width: 425px) {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 10px;
    justify-content: center;
  }

  @media (max-width: 425px) {
    input {
      width: 90%;
    }
  }
`;
