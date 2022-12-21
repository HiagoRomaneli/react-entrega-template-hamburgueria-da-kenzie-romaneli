import styled from "styled-components";

export const StyledCart = styled.div`
  margin-top: 50px;
  width: 25%;

  .divCarrinho {
    background-color: var(--color-primary);
    height: 65px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-radius: 4px 4px 0 0;
  }

  h3 {
    color: var(--grey-0);
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-1);
  }

  @media (max-width: 1024px) {
    width: 30%;
  }

  @media (max-width: 560px) {
    width: 95%;
  }
`;

export const StyleNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 158px;
  background-color: var(--grey-0);
  padding: 10px 50px;
  border-radius: 0 0 4px 4px;
`;

export const StyledLIstCart = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-0);

  li {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    justify-content: space-between;

    div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    img {
      width: 70px;
      height: 70px;
      background-color: var(--grey-20);
      border-radius: var(--border-radius-2);
    }
  }
`;

export const StyledSpanTotalValue = styled.span`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-0);
  border-top: 2px solid var(--grey-20);

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    border-radius: 0 0 4px 4px;
  }
`;
