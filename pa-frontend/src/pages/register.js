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
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="register-form" onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="newUsername" className="text-lg font-bold mb-2">
            Create a Username
          </label>
          <input
            type="text"
            value={newUsername}
            name="newUsername"
            onChange={handleNewUsernameChange}
            id="newUsername"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newName" className="text-lg font-bold mb-2">
            Enter your Name
          </label>
          <input
            type="text"
            value={newName}
            name="newName"
            onChange={handleNewNameChange}
            id="newName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newPassword" className="text-lg font-bold mb-2">
            Set a Password
          </label>
          <input
            type="password"
            value={newPassword}
            name="newPassword"
            onChange={handleNewPasswordChange}
            id="newPassword"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          id="register-button"
          className="register-button"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
