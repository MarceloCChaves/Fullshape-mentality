import { useEffect, useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";
import { IGroup } from "../../interfaces/IGroup";
import Group from "../../components/Group";

const Groups = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .get(`/comunidades`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setGroups(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  return (
    <Container>
      <h2>Comunidades</h2>
      {groups.map((group) => {
        return (
          <Group
            key={group.id}
            nome={group.nome}
            descricao={group.descricao}
            createdAt={group.createdAt}
          />
        );
      })}
    </Container>
  );
};

export default Groups;
