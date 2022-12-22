import styled from "styled-components";

export const StyledListProducts = styled.ul`
  width: 100%;
  margin-top: 3.125rem;
  max-width: 85.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  justify-content: flex-start;

  li {
    width: 18%;
    max-width: 18.75rem;
    height: 22.125rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    border: 2px solid var(--grey-20);
    border-radius: var(--border-radius-2);

    div {
      padding: 1.25rem;
    }

    img {
      background: var(--grey-0);
      width: 100%;
      height: 9.375rem;
    }

    @media (max-width: 1024px) {
      width: 35%;
    }
    @media (max-width: 560px) {
      width: 50%;
    }
  }

  @media (max-width: 560px) {
    flex-direction: row;
    overflow: auto;
    height: 50%;
    flex-wrap: nowrap;
  }

  @media (max-width: 560px) {
    width: 95%;
  }
`;
