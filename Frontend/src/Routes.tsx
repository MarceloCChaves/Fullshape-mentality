import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import NewGroup from "./pages/newGroup";

function Router() {
  const isLogged = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <div style={{'display': 'flex'}}>
        {isLogged ? <Navbar/> : <></>}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new-group" element={<NewGroup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;