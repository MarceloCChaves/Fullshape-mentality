import styled from "styled-components";

export const Container = styled.form`
  width: 767px;
  max-width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const Content = styled.section`
  background: var(--white);
  text-align: center;
  padding: 4rem 2rem;
  border-radius: 1rem;

  h2 {
    font-size: 2rem;
    font-style: italic;
    color: var(--orange);
  }
`;

export const ContentInfo = styled.article`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  width: 900px;
  max-width: 100%;
  padding: 20px;
  border-radius: 1rem;

  h3 {
    font-style: italic;
    color: var(--orange);
    margin: 0 30px;
  }

  input {
    width: 300px;
    max-width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
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
`
export const ModalDeleteUser = styled.div`
  h2 {
    color: var(--white);
    font-size: 2rem
  }

  p {
    color: var(--white);
  }
`;