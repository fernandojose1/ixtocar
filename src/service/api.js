/* eslint-disable prettier/prettier */
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 2500,
  headers: { "X-Custom-Header": "foobar" },
});

export default api;
