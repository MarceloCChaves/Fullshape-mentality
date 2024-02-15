import { Link } from "react-router-dom";
import styled from "styled-components";

interface Button {
  color: string,
  background: string
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-right: 1px dotted var(--white);
  height: 100vh;
`;

export const Header = styled.header``;

export const CloseNavButton = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 50%;
  border: 2px solid var(--black);
  width: 40px;
  height: 40px;
  position: absolute;
  right: -15px;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(Link)`
  padding: 1rem;
  color: var(--white);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1rem;
  transition: 0.3s linear;
  white-space: nowrap;

  &:hover {
    background-color: var(--white);
    color: var(--black);
  }
`;

export const ModalLogout = styled.div`
  h2 {
    color: var(--white);
    font-size: 2rem
  }
`;

export const Button = styled.button<Button>`
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  padding: 10px 20px;
  border-radius: 0.5rem;
  border: none;

  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  margin-inline-end: 10px;
  margin-top: 10px;
`