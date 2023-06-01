import React from "react";

const LoginPage = ({
  handleLogin,
  username,
  password,
  handleUsername,
  handlePassword,
}) => {
  return (
    <div className='login-container'>
      <form onSubmit={handleLogin}>
        <div>
          <b>Username</b>
          <input
            type='text'
            value={username}
            name='username'
            onChange={handleUsername}
            id='username'
          />
        </div>
        <div>
          <b>Password</b>
          <input
            type='password'
            value={password}
            name='password'
            onChange={handlePassword}
            id='password'
          />
        </div>
        <button className='login-button' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
