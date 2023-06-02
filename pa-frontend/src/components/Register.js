import { useState } from "react";
import { useNavigate } from "react-router-dom";

import RegisterPage from "../pages/register";
import userService from "../services/user";

import { useNotificationDispatch } from "./contexts/NotificationContext";

const Register = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();
  const notificationDispatch = useNotificationDispatch();

  const resetRegisterForm = () => {
    setNewUsername("");
    setNewName("");
    setNewPassword("");
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!newPassword || !newName || !newPassword) {
      notificationDispatch({
        message: "Please fill in the form",
        type: "failure",
      });
    } else {
      try {
        await userService.register({
          newUsername,
          newName,
          newPassword,
        });
        resetRegisterForm();
        navigate("/login");
        notificationDispatch({ message: "User created!", type: "success" });
      } catch (error) {
        if (error.response.data.error.includes("validation")) {
          notificationDispatch({ message: "Username already taken!", type: "failure" });
        }
      }
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
