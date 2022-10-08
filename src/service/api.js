/* eslint-disable prettier/prettier */
import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 2500,
  headers: { "X-Custom-Header": "foobar" },
});

export default api;
