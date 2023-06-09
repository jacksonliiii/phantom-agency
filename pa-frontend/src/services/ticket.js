import axios from "axios";

const baseUrl = "/api/tickets";
let token = null;

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

const removeById = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const ticketService = { getAll, getById, create, update, removeById, setToken };
export default ticketService;
