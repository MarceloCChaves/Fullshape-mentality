import { useState, FormEvent } from "react";
import api from "../../services/api";
import { Button, Container, Content, Labels } from "./styles.ts";
import Spinner from "../../components/Spinner/index.tsx";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { CgLock, CgLockUnlock } from "react-icons/cg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name: username,
        email: email,
        password: password,
      });

      toast.success("Cadastro realizado com sucesso, redirecionando...");

      setLoading(!loading);

      setTimeout(() => {
        window.location.href = "/";
      }, 4000);
    } catch (error) {
      toast.error("Erro realizar seu cadastro. Por favor, tente novamente.");
    }
  };

  return (
    <Container>
      <h2>Full Shape Mentality</h2>
      <Content onSubmit={handleRegister}>
        <Labels>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />
        </Labels>
        <Labels>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Labels>
        <Labels>
          <label>Senha:</label>
          <div className="password-input">
            <input
              type={seePassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="button" onClick={() => setSeePassword(!seePassword)}>
              {seePassword ? <CgLockUnlock /> : <CgLock />}
            </Button>
          </div>
        </Labels>
        {loading ? <Spinner /> : <Button type="submit">Cadastrar</Button>}
        <p className="registration">
          Já possui uma conta? <Link to="/">Logar</Link>
        </p>
      </Content>
    </Container>
  );
};

export default Register;
