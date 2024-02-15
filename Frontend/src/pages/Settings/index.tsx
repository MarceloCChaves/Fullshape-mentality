import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  Button,
  Container,
  Content,
  ContentInfo,
  ModalDeleteUser,
} from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Spinner from "../../components/Spinner";
import ModalComponent from "../../components/Modal";
import { IPayload } from "../../interfaces/IPayload";


const Settings = () => {
  const [user, setUser] = useState<IPayload | null>(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: IPayload = jwtDecode(token);

      if (decodedToken && decodedToken.email) {
        setUser(decodedToken);
      } else {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (user?.name) {
      setUsername(user.name);
    }
  }, [user]);

  const body = {
    name: username,
  };

  const updateUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await api
      .put(`/users/${user?.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setLoading(!loading);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteUser = async () => {
    try {
      await api.delete(`/users/${user?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      console.error('Erro ao deletar usuário', error);
    }
  };

  return (
    <Container onSubmit={updateUser}>
      <Content>
        <h2>Ajustes</h2>
        <ContentInfo>
          <h3>Editar nome de usuário</h3>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </ContentInfo>
        <ContentInfo>
          <h3>Deletar conta</h3>
          <Button type="button" onClick={() => setOpenModal(!openModal)}>
            <RiDeleteBin5Fill />
          </Button>
        </ContentInfo>
        <ContentInfo>
          {loading ? (
            <Spinner />
          ) : (
            <Button type="submit">Salvar alterações</Button>
          )}
        </ContentInfo>
      </Content>
      {openModal ? (
        <ModalComponent
          modalIsOpen={openModal}
          closeModal={() => setOpenModal(!openModal)}
        >
          {token ? (
            <ModalDeleteUser>
              <h2>Tem certeza?</h2>
              <p>A sua conta será deletada permanentemente</p>
              <div>
                <Button type="button" onClick={deleteUser}>
                  Sim, deletar conta
                </Button>
                <Button type="button" onClick={() => setOpenModal(!openModal)}>
                  Cancelar
                </Button>
              </div>
            </ModalDeleteUser>
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

export default Settings;
