import { useState } from "react";

import RegisterPage from "../pages/register";
import userService from "../services/user";

const Register = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const resetRegisterForm = () => {
    setNewUsername("");
    setNewName("");
    setNewPassword("");
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      await userService.register({
        newUsername,
        newName,
        newPassword,
      });
      resetRegisterForm();
    } catch (error) {
      // notificationDispatch(error);
    }
  };

  return (
    <RegisterPage
      handleRegister={handleRegister}
      newUsername={newUsername}
      newName={newName}
      newPassword={newPassword}
      handleNewUsernameChange={({ target }) => {
        setNewUsername(target.value);
      }}
      handleNewNameChange={({ target }) => {
        setNewName(target.value);
      }}
      handleNewPasswordChange={({ target }) => {
        setNewPassword(target.value);
      }}
    />
  );
};

export default Register;
