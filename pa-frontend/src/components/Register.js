import { useState } from "react";

import RegisterPage from "../pages/register";

const Register = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return <RegisterPage />;
};

export default Register;
