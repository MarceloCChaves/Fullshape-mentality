import { useEffect, useState } from "react";
import {
  Container,
  Card,
  Header,
  Menu,
  Button,
  Chart,
  Title,
  Workout,
} from "./styles";
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Rectangle,
} from "recharts";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { jwtDecode } from "jwt-decode";
import ModalComponent from "../Modal";
import { UserData } from "../../interfaces/IUserData";
import { IPayload } from "../../interfaces/IPayload";

const Main = () => {
  const date = new Date();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [workoutDate, setWorkoutDate] = useState("");
  const [time, setTime] = useState(0);
  const [user, setUser] = useState<IPayload | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = [
    {
      name: monthNames[date.getMonth()],
      Treinos: 10,
    },
    {
      name: monthNames[date.getMonth() + 1],
      Treinos: 12,
    },
    {
      name: monthNames[date.getMonth() + 2],
      Treinos: 13,
    },
    {
      name: monthNames[date.getMonth() + 3],
      Treinos: 12,
    },
    {
      name: monthNames[date.getMonth() + 4],
      Treinos: 8,
    },
    {
      name: monthNames[date.getMonth() + 5],
      Treinos: 14,
    },
  ];

  const workoutEngagement = (engagement: number) => {
    if (engagement < 10) {
      return "Baixo";
    }
    if (engagement < 15) {
      return "Médio";
    } else {
      return "Alto";
    }
  };

  const body = {
    titulo: title,
    descricao: description,
    data: workoutDate,
    tempo: time,
  };

  const createWorkout = () => {
    api
      .post("/treinos", body)
      .then(() => {
        alert("treino cadastrado");
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      try {
        if (user?.id && token) {
          const res = await api.get(`/users/${user.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, [user?.id]);

  console.log(userData)

  return (
    <Container>
      <Header>
        <div>
          <h1>Bem vindo, {userData?.name}</h1>
          <p>Pronto para mais um treino?</p>
        </div>
        <div>
          <Link to="/new-group">
            <Button>Nova comunidade</Button>
          </Link>
          <Link to="/groups">
            <Button>Ver comunidades</Button>
          </Link>
        </div>
      </Header>
      <Title>Meu treino</Title>
      <Menu>
        <Card>
          <h1>{userData?.Treinos.length}</h1>
          <p>Treinos esse mês</p>
        </Card>
        <Card>
          <h1>1</h1>
          <p>no grupo fullshape mentality</p>
        </Card>
        <Card>
          <h1>{workoutEngagement(Number(userData?.Treinos.length))}</h1>
          <p>engajamento com o treino</p>
        </Card>
      </Menu>
      <Workout>
        <Button type="button" onClick={() => setOpenModal(!openModal)}>
          + Novo treino
        </Button>
        {openModal ? (
          <ModalComponent
            modalIsOpen={openModal}
            closeModal={() => setOpenModal(!openModal)}
          >
            <Container onSubmit={createWorkout}>
              <h2>Cadastrar treino</h2>
              <Workout>
                <input
                  type="text"
                  placeholder="Título"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Descrição (opcional)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Data"
                  value={workoutDate}
                  onChange={(e) => setWorkoutDate(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Tempo"
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                />
                <div>
                  <Button type="submit">Publicar</Button>
                  <Button type="button" onClick={() => setOpenModal(!openModal)}>
                    Cancelar
                  </Button>
                </div>
              </Workout>
            </Container>
          </ModalComponent>
        ) : (
          <></>
        )}
      </Workout>
      <Title>Atividade</Title>
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Treinos"
              barSize={100}
              fill="#ff5e1e"
              activeBar={<Rectangle fill="#ff5e1e" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </Chart>
    </Container>
  );
};

export default Main;
