import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 36px;
  gap: 67px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 30px;
    gap: 8px;
  }

  @media (max-width: 400px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
