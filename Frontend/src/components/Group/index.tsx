import moment from "moment/min/moment-with-locales";
import { IGroup } from "../../interfaces/IGroup";
import { Button, Content } from "./styles";

const Group = ({nome, descricao, createdAt}: IGroup) => {
  moment.locale('pt-br');
  return(
    <Content>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p>Criado {moment(createdAt).fromNow()}</p>
      <Button>Acessar comunidade</Button>
    </Content>
  )
}

export default Group;