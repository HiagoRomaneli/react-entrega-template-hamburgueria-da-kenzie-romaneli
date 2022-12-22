import styled from "styled-components";

export const StyledDivInputs = styled.div`
  position: relative;
  padding-top: 13px;

  input {
    box-sizing: border-box;
    transition: all 1s linear;
    width: 100%;
    :focus {
      border: 2px solid var(--grey-100);
    }

    ::placeholder {
      color: transparent;
    }

    :focus:required:invalid {
      border: 2px solid var(--color-secondary);
    }
  }
  label {
    pointer-events: none;
    position: absolute;
    top: 2.48px;
    left: 15px;
    transition: all 1s linear;
    padding: 5px;
    box-sizing: border-box;
    background-color: white;
  }
`;
