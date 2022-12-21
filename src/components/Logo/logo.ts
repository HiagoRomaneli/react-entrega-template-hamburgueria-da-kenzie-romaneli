import styled from "styled-components";

export const StyledLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 377px;
  min-width: 300px;
  gap: 30px;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    gap: 19px;
    border: 1px solid var(--grey-20);
    border-radius: 5px;
    padding: 17px 14px;

    div {
      background-color: var(--color-primary-3);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      color: var(--grey-50);

      strong {
        color: var(--grey-100);
      }
    }
  }

  @media (max-width: 768px) {
    .img-points {
      display: none;
    }
  }
`;
