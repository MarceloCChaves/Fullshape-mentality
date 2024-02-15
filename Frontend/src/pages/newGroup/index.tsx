import { FormEvent, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { Container, Content, Labels } from "./styles";
import { Button } from "../Login/styles";

const NewGroup = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const createGroup = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/comunidades", {
        nome,
        descricao,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Criando comunidade...")

      setLoading(!loading);

      setTimeout(() => {
        window.location.href = "/groups";
      }, 4000);
    } catch (error) {
      toast.error("Erro ao criar comunidade");
    }
  };

  return (
    <Container>
      <h2>Nova comunidade</h2>
      <Content onSubmit={createGroup}>
        <Labels>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            autoFocus
          />
        </Labels>
        <Labels>
          <label>Descrição:</label>
          <div className="password-input">
            <input
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>
        </Labels>
        {loading ? <Spinner /> : <Button type="submit">Criar comunidade</Button>}
      </Content>
    </Container>
  );
};

export default NewGroup;
