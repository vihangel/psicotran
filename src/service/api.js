import axios from "axios";
const url = "http://18.228.196.210:3333";

const api = axios.get({
  baseURL: url,
});

export default api;
