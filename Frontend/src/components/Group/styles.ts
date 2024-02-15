import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: var(--light-black);
  width: 910px;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

  p {
    color: var(--white);
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  h2 {
    color: var(--white);
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem 0;
  }
`;

export const Button = styled.button`
  color: var(--white);
  background: var(--orange);
  padding: 10px 20px;
  border-radius: 0.5rem;
  border: none;

  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  margin-inline-end: 10px;
  margin-top: 10px;
`;
