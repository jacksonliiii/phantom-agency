import React from "react";
import { Link } from "react-router-dom";

const LoginPage = ({
  handleLogin,
  username,
  password,
  handleUsername,
  handlePassword,
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="text-lg font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={handleUsername}
            id="username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-lg font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handlePassword}
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
        <div className="mt-4">
          <span className="text-lg">
            New user?{" "}
            <Link to="/users/register" className="register-link underline">
              Register an account here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
