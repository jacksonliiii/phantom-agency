import { useState } from "react";

import LoginPage from "../pages/login";
import loginService from "../services/login";
import ticketService from "../services/ticket";

import { useUserDispatch } from "./contexts/UserContext";
import { useNotificationDispatch } from "./contexts/NotificationContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userDispatch = useUserDispatch();
  const notificationDispatch = useNotificationDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      ticketService.setToken(user.token);
      userDispatch(user);
      setUsername("");
      setPassword("");
      notificationDispatch({ message: "Logged in", type: "success" });
    } catch (error) {
      notificationDispatch({ message: error, type: "failure" });
    }
  };

  return (
    <LoginPage
      handleLogin={handleLogin}
      username={username}
      password={password}
      handleUsername={({ target }) => setUsername(target.value)}
      handlePassword={({ target }) => setPassword(target.value)}
    />
  );
};

export default Login;
