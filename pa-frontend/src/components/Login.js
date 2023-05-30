import { useState } from "react";

import loginService from '../services/login'
import ticketService from '../services/ticket'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      ticketService.setToken(user.token);
      // setUser(user);
      setUsername("");
      setPassword("");
    } catch (error) {
      // notifyWith("Wrong username or password", "error");
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1>Welcome to Phantom Agency!</h1>
      <form onSubmit={handleLogin}>
        <div>
          <b>Username</b>
          <input
            type='text'
            value={username}
            name='username'
            onChange={({ target }) => setUsername(target.value)}
            id='username'
          />
        </div>
        <div>
          <b>Password</b>
          <input
            type='text'
            value={password}
            name='password'
            onChange={({ target }) => setPassword(target.value)}
            id='password'
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
