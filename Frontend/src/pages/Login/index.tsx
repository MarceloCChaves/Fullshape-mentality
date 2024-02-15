import { useState, FormEvent } from "react";
import api from "../../services/api";
import { Button, Container, Content, Labels } from "./styles.ts";
import Spinner from "../../components/Spinner/index.tsx";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { CgLock, CgLockUnlock } from "react-icons/cg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { accessToken } = response.data;

      localStorage.setItem("token", accessToken);

      setLoading(!loading);

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 4000);
    } catch (error) {
      toast.error("Erro ao fazer login. Por favor, tente novamente.");
    }
  };

  return (
    <Container>
      <h2>Full Shape Mentality</h2>
      <Content onSubmit={handleLogin}>
        <Labels>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
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
        {loading ? <Spinner /> : <Button type="submit">Login</Button>}
        <p className="registration">
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </Content>
    </Container>
  );
};

export default Login;
