import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--black);
  border-radius: 1.5rem;
  height: 100vh;
  width: 100%;
  max-width: 100%;

  h2 {
    font-size: 2rem;
    font-style: italic;
    margin: 2rem 0;
    color: var(--white);
  }

  .registration {
    color: var(--white);
    margin-top: 1.25rem;

    a {
      color: var(--orange);
      text-decoration: none;
    }
  }
`;

export const Content = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 700px;
  max-width: 100%;

  label {
    color: var(--white);
  }
`;

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 500px;
  max-width: 100%;

  .password-input {
    display: flex;
  }

  input {
    padding: 10px 15px;
    margin: 10px 10px 0 0;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    outline: none;
    width: 100%;
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
