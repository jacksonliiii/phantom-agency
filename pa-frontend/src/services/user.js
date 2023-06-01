import axios from "axios";

const baseUrl = "/api/users/register";

const register = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const userService = { register };
export default userService;
