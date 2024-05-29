import axios from "axios";

export const api = axios.create({
  baseURL: "https://farmacia-nest-t0o5.onrender.com/",
});
