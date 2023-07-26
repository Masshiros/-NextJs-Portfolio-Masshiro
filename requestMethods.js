import axios from "axios";
// const BASE_URL = "https://dollapp.onrender.com/api";
// const BASE_URL = "https://tachibao.herokuapp.com/api";
const BASE_URL = "https://tachibao.cyclic.app/api";
// const BASE_URL = "http://localhost:5000/api";

export const domainApi = BASE_URL;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
