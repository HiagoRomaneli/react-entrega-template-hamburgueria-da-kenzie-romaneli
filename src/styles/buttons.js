import styled from "styled-components";

export const Button = styled.button`
  padding: 0 20px;
  border: none;
  border-radius: 8px;
  background-color: var(--color-primary);
  height: 40px;
  color: var(--grey-0);
  :hover {
    background-color: var(--color-primary-2);
  }
`;

export const StyledButtonRemove = styled.button`
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-3);
  color: var(--grey-50);
  :hover {
    text-decoration-line: underline;
  }
`;

export const StyleButtonGrey = styled.button`
  height: 60px;
  width: 100%;
  border-radius: var(--border-radius);
  background-color: var(--grey-20);
  color: var(--grey-50);
  :hover {
    background-color: var(--grey-50);
    color: var(--grey-20);
  }
`;
