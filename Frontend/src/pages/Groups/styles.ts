import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--black);
  border-radius: 1.5rem;
  width: 100%;
  max-width: 100%;
  margin-top: 5rem;

  h2 {
    font-size: 2rem;
    font-style: italic;
    margin: 2rem 0;
    color: var(--white);
  }
`;
