import React from "react";

const RegisterPage = ({
  newUsername,
  newName, 
  newPassword,
  handleNewUsernameChange,
  handleNewNameChange,
  handleNewPasswordChange,
  handleRegister
}) => {
  return (<div>
    <form onSubmit={handleRegister}>
      <div>
        <b>Create a Username</b>
        <input
          type="text"
          value={newUsername}
          name="newUsername"
          onChange={handleNewUsernameChange}
          id="newUsername"
        />
      </div>
      <div>
        <b>Enter your Name</b>
        <input
          type="text"
          value={newName}
          name="newName"
          onChange={handleNewNameChange}
          id="newName"
        />
      </div>

      <div>
      <b>Set a Password</b>
        <input
          type="password"
          value={newPassword}
          name="newPassword"
          onChange={handleNewPasswordChange}
          id="newPassword"
        />
      </div>
      <button id="register-button" type="submit">
        Register
      </button>
    </form>
    </div>);
};

export default RegisterPage;
