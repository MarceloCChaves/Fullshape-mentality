import styled from "styled-components";

export const Container = styled.form`
  padding: 2rem;

  h2 {
    color: var(--white);
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h1, p {
    color: var(--white);
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
  margin: 30px 0;
`

export const Menu = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Workout = styled.main`

display: flex;
align-items: baseline;
flex-direction: column;

  input {
    width: 500px;
    max-width: 100%;
    padding: 20px 15px;
    margin: 10px 0;
    border-radius: 0.5rem;
    font-size: 1.25rem;
  }
`

export const Card = styled.section`
  background: var(--white);
  margin-top: 20px;
  width: 500px;
  max-width: 80%;
  height: 200px;
  padding: 20px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  
  h1 {
    font-size: 4rem;
  }
`

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
  margin-top: 20px;
`

export const Chart = styled.section`
  width: 100%;
  height: 350px;
  margin: 30px 0;
  background: #fff;
  padding: 30px 0;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`