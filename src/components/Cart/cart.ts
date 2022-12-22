import styled from "styled-components";

export const StyledCartModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--grey-opacity);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .modal-container {
    width: 25%;
    background-color: var(--grey-20);
    border-radius: 4px;
    box-sizing: border-box;

    .divCarrinho {
      background-color: var(--color-primary);
      height: 65px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      border-radius: 4px 4px 0 0;
      box-sizing: border-box;
      width: 100%;
      justify-content: space-between;

      button {
        font-size: 18px;
        color: var(--grey-0-opacity);

        :hover {
          color: var(--grey-0);
        }
      }
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

    .div-count {
      background-color: var(--grey-20);
      display: flex;
      align-items: center;
      max-width: 110px;

      button {
        font-size: 22px;
        font-weight: 400;
        color: var(--color-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 11px;
        width: 35px;
      }

      span {
        font-size: 12px;
        font-weight: 400;
        background-color: var(--grey-0);
        width: 40px;
        height: 24px;
        text-align: center;
        line-height: 24px;
      }
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
