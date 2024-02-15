import { CgGym } from "react-icons/cg";
import { RiHome2Fill, RiSettings2Fill, RiLogoutBoxLine } from "react-icons/ri";
import {
  Button,
  CloseNavButton,
  Container,
  Header,
  ModalLogout,
  NavLink,
  NavLinks,
} from "./styles";
import { useState } from "react";
import ModalComponent from "../Modal";
import Spinner from "../Spinner";

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [openModal, setOpenModal] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setTimeout(() => {
      setOpenModal(!openModal);
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Container>
      {showNavBar ? (
        <>
          <Header>
            <NavLink to="/dashboard">FullShape platform</NavLink>
            <CloseNavButton onClick={() => setShowNavBar(!showNavBar)}>
              {"<"}
            </CloseNavButton>
          </Header>
          <NavLinks>
            <NavLink to="/dashboard">
              <RiHome2Fill />
              Dashboard
            </NavLink>
            <NavLink to="/dashboard">
              <CgGym />
              Meus treinos
            </NavLink>
            <NavLink to="/settings">
              <RiSettings2Fill />
              Ajustes
            </NavLink>
            <NavLink to="/dashboard" onClick={() => setOpenModal(!openModal)}>
              <RiLogoutBoxLine />
              Logout
            </NavLink>
          </NavLinks>
        </>
      ) : (
        <>
          <Header>
            <NavLink to="/dashboard">
              <CgGym />
            </NavLink>
            <CloseNavButton onClick={() => setShowNavBar(!showNavBar)}>
              {">"}
            </CloseNavButton>
          </Header>
          <NavLinks>
            <NavLink to="/dashboard">
              <RiHome2Fill />
            </NavLink>
            <NavLink to="/dashboard">
              <CgGym />
            </NavLink>
            <NavLink to="/settings">
              <RiSettings2Fill />
            </NavLink>
            {token !== null ? (
              <NavLink
                to="/dashboard"
                onClick={() => setOpenModal(!openModal)}
              >
                <RiLogoutBoxLine />
              </NavLink>
            ) : (
              <></>
            )}
          </NavLinks>
        </>
      )}
      {openModal ? (
        <ModalComponent
          modalIsOpen={openModal}
          closeModal={() => setOpenModal(!openModal)}
        >
          {token ? (
            <ModalLogout>
              <h2>Tem certeza?</h2>
              <div>
                <Button
                  color="var(--white)"
                  background="var(--orange)"
                  onClick={logout}
                >
                  Fazer logout
                </Button>
                <Button
                  color="var(--orange)"
                  background="var(--white)"
                  onClick={() => setOpenModal(!openModal)}
                >
                  Cancelar
                </Button>
              </div>
            </ModalLogout>
          ) : (
            <>
              <Spinner />
            </>
          )}
        </ModalComponent>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Navbar;
